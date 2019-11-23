import {
  IonButton,
  IonButtons,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRow
} from "@ionic/react";
import { arrowBack, lock, mail } from "ionicons/icons";
import { validate } from "isemail";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Link, Redirect } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { GET_USER_MUTATION } from "../graphql/Mutation";
import { USER_QUERY } from "../graphql/Query";
import "./Signup.css";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedin, setSignedin] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    response: ""
  });

  const validateSigninUserField = (signupUserInput: any) => {
    const validationErrors: any = {};

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
  };

  const [getUser, { loading }] = useMutation(GET_USER_MUTATION, {
    refetchQueries: [{ query: USER_QUERY }],
    variables: { email, password }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate the user input fields
    const validationErrors: any = validateSigninUserField({ email, password });

    setErrors(validationErrors);

    // Check if there is an error, if there is abort signing up.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const loggedInUser = await getUser({
        variables: { email, password }
      });

      if (!loggedInUser.data.login) {
        return;
      }

      setEmail("");
      setPassword("");
      setSignedin(true);
      setErrors({
        email: "",
        password: "",
        response: ""
      });
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
    return <Loader message={"Signing in..."} />;
  }

  if (signedin) {
    return <Redirect to="/" />;
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
          {errors.response && <Error message={errors.response} />}
          <IonList className="au-form">
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
                  mode="ios"
                  className="textfieldIcon"
                />
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
                <IonIcon icon={lock} color="dark" className="textfieldIcon" />
              </div>
            </IonItem>
            <IonItem className="textfield">
              <IonButton
                expand="full"
                className="Registerbutton"
                onClick={e => handleSubmit(e)}
              >
                Sign-in
              </IonButton>
            </IonItem>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
              slot={"start"}
            >
              <IonButtons>
                <IonIcon
                  icon={arrowBack}
                  color="dark"
                  mode="ios"
                  size={"large"}
                />{" "}
                Sign-up
              </IonButtons>
            </Link>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Signin;
