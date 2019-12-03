import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
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
import Error from "../components/Error";
import Loader from "../components/Loader";
import Pageinfo from "../components/PageInfo";
import { USER_UPDATE_MUTATION } from "../graphql/Mutation";
import { USER_QUERY } from "../graphql/Query";
import "./Profile.css";

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    cell: "",
    confirmPassword: "",
    email: "",
    name: "",
    newPassword: "",
    password: "",
    response: ""
  });

  const validateUpdateUserField = (updateUserInput: any) => {
    const validationErrors: any = {};
    // Check if the submitted email address is valid.
    if (
      updateUserInput.email &&
      !validate(updateUserInput.email, { minDomainAtoms: 2 })
    ) {
      validationErrors.email = "Email address is invalid";
    }

    // Check if the password is supplied.
    if (!updateUserInput.password.length) {
      validationErrors.password = "Please provide your current password";
    }

    // Check if the password is secure enough.
    if (updateUserInput.newPassword && updateUserInput.newPassword.length < 5) {
      validationErrors.newPassword =
        "Password should be at least 5 characters long";
    }

    // Check if passwords match
    if (
      updateUserInput.confirmPassword &&
      updateUserInput.newPassword !== updateUserInput.confirmPassword
    ) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const [updateUser, { loading }] = useMutation(USER_UPDATE_MUTATION, {
    refetchQueries: [{ query: USER_QUERY }],
    variables: { cell, email, name, newPassword, password }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate the user input fields
    const validationErrors: any = validateUpdateUserField({
      confirmPassword,
      email,
      newPassword,
      password
    });

    setErrors(validationErrors);

    // Check if there is an error, if there is abort signing up.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      updateUser();

      setErrors({
        cell: "",
        confirmPassword: "",
        email: "",
        name: "",
        newPassword: "",
        password: "",
        response: ""
      });
      setCell("");
      setConfirmPassword("");
      setEmail("");
      setName("");
      setNewPassword("");
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
      return <Loader message={"Updating..."} />;
    }
  }

  return (
    <IonContent>
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
            <Pageinfo title="Profile"></Pageinfo>
            <IonCard className="FooterCard">
              <IonCardContent>
                {errors.response && <Error message={errors.response} />}
                <IonList className="au-form">
                  <IonItem className="textfield">
                    <IonInput
                      type="text"
                      value={name}
                      placeholder="Full name"
                      onIonChange={(e: any) => setName(e.target.value)}
                    />
                    <div className="textLabel" slot="start">
                      <IonIcon
                        icon={person}
                        color="dark"
                        className="textfieldIcon"
                      />
                    </div>
                  </IonItem>
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
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
                  <IonItem className="textfield">
                    <IonInput
                      type="text"
                      value={cell}
                      onIonChange={(e: any) => setCell(e.target.value)}
                      placeholder="Cellphone no."
                    />
                    <div className="textLabel" slot="start">
                      <IonIcon
                        icon={call}
                        color="dark"
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
                      placeholder="Current password"
                    />
                    <div className="textLabel" slot="start">
                      <IonIcon
                        icon={unlock}
                        color="dark"
                        className="textfieldIcon"
                      />
                    </div>
                  </IonItem>
                  {errors.newPassword && (
                    <p style={{ color: "red" }}>{errors.newPassword}</p>
                  )}
                  <IonItem className="textfield">
                    <IonInput
                      type="password"
                      value={newPassword}
                      onIonChange={(e: any) => setNewPassword(e.target.value)}
                      placeholder="New password"
                    />
                    <div className="textLabel" slot="start">
                      <IonIcon
                        icon={lock}
                        color="dark"
                        className="textfieldIcon"
                      />
                    </div>
                  </IonItem>
                  {errors.confirmPassword && (
                    <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                  )}
                  <IonItem className="textfield">
                    <IonInput
                      type="password"
                      value={confirmPassword}
                      onIonChange={(e: any) =>
                        setConfirmPassword(e.target.value)
                      }
                      placeholder="Confirm password"
                    />
                    <div className="textLabel" slot="start">
                      <IonIcon
                        icon={lock}
                        color="dark"
                        className="textfieldIcon"
                      />
                    </div>
                  </IonItem>
                  <IonItem className="textfield">
                    <IonButton
                      expand="full"
                      className="Registerbutton"
                      onClick={e => handleSubmit(e)}
                    >
                      UPDATE
                    </IonButton>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Profile;
