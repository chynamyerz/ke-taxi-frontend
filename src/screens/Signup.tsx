import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRow
} from "@ionic/react";
import { call, lock, mail, person, unlock } from "ionicons/icons";
import { validate } from "isemail";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Redirect } from "react-router";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { SIGNUP_MUTATION } from "../graphql/Mutation";
import "./Signup.css";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    cell: "",
    confirmPassword: "",
    email: "",
    name: "",
    password: "",
    response: ""
  });

  const validateSignupUserField = (signupUserInput: any) => {
    const validationErrors: any = {};

    // Check if name is not empty.
    if (!name) {
      validationErrors.email = "Name is required";
    }

    // Check if contact number is not empty.
    if (!cell) {
      validationErrors.email = "Contact number is required";
    }

    // Check if the submitted email address is valid.
    if (
      signupUserInput.email &&
      !validate(signupUserInput.email, { minDomainAtoms: 2 })
    ) {
      validationErrors.email = "Email address is invalid";
    }

    // Check if the password is supplied.
    if (!signupUserInput.password.length) {
      validationErrors.password = "Passwor is required";
    }

    // Check if the password is secure enough.
    if (signupUserInput.password && signupUserInput.password.length < 5) {
      validationErrors.newPassword =
        "Password should be at least 5 characters long";
    }

    // Check if passwords match
    if (
      signupUserInput.confirmPassword &&
      signupUserInput.password !== signupUserInput.confirmPassword
    ) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const [signup, { data, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: { cell, email, name, password }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate the user input fields
    const validationErrors: any = validateSignupUserField({
      cell,
      email,
      name,
      password
    });

    setErrors(validationErrors);

    // Check if there is an error, if there is abort signing up.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      signup();
      setErrors({
        cell: "",
        confirmPassword: "",
        email: "",
        name: "",
        password: "",
        response: ""
      });
      setCell("");
      setConfirmPassword("");
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      setErrors({
        ...errors,
        response: error.message
          .replace("GraphQL error: ", "")
          .replace("Network error: ", "")
      });
    }
  };

  if (loading) {
    if (loading) {
      return <Loader message={"Signing up..."} />;
    }
  }
  if (data && data.signup && data.signup.id) {
    return <Redirect to="/signin" />;
  }

  return (
    <IonGrid>
      <IonRow>
        <IonCol
          sizeSm={"8"}
          offsetSm={"2"}
          sizeMd={"6"}
          offsetMd={"3"}
          sizeLg={"4"}
          offsetLg={"4"}
        >
          <h4 className="instruction">Create an account</h4>
          <p className="slogan">
            and explore the new way of using public taxis
          </p>
          {errors.response && <Error message={errors.response} />}
          <IonList className="au-form">
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            <IonItem className="textfield">
              <IonInput
                type="text"
                value={name}
                placeholder="Full name"
                onIonChange={(e: any) => setName(e.target.value)}
              />
              <div className="textLabel" slot="start">
                <IonIcon icon={person} color="dark" className="textfieldIcon" />
              </div>
            </IonItem>
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <IonItem className="textfield">
              <IonInput
                type="text"
                value={email}
                placeholder="Email address"
                onIonChange={(e: any) => setEmail(e.target.value)}
              />
              <div className="textLabel" slot="start">
                <IonIcon
                  icon={mail}
                  color="dark"
                  className="textfieldIcon"
                  mode="ios"
                />
              </div>
            </IonItem>
            {errors.cell && <p style={{ color: "red" }}>{errors.cell}</p>}
            <IonItem className="textfield">
              <IonInput
                type="text"
                value={cell}
                onIonChange={(e: any) => setCell(e.target.value)}
                placeholder="Cellphone no."
              />
              <div className="textLabel" slot="start">
                <IonIcon icon={call} color="dark" className="textfieldIcon" />
              </div>
            </IonItem>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <IonItem className="textfield">
              <IonInput
                type="password"
                value={password}
                onIonChange={(e: any) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="textLabel" slot="start">
                <IonIcon icon={unlock} color="dark" className="textfieldIcon" />
              </div>
            </IonItem>
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
            <IonItem className="textfield">
              <IonInput
                type="password"
                value={confirmPassword}
                onIonChange={(e: any) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
              <div className="textLabel" slot="start">
                <IonIcon icon={lock} color="dark" className="textfieldIcon" />
              </div>
            </IonItem>
            <IonItem className="textfield">
              <IonButton
                expand="full"
                className="Registerbutton"
                onClick={e => handleSubmit(e)}
              >
                Sign-up
              </IonButton>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Register;
