import { IonButton, IonIcon, IonInput, IonItem, IonList } from "@ionic/react";
import { call, lock, mail, person, unlock } from "ionicons/icons";
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
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    response: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: { cell, email, name, password }
  });

  if (error && !errors.response) {
    setErrors({
      ...errors,
      response: error.message
        .replace("GraphQL error: ", "")
        .replace("Network error: ", "")
    });
  }

  if (loading) {
    if (loading) {
      return <Loader message={"Signing up..."} />;
    }
  }
  if (data && data.signup && data.signup.id) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <h4 className="instruction">Create an account</h4>
      <p className="slogan">and explore the new of using public taxis</p>
      <IonList className="au-form">
        {errors.response && <Error message={errors.response} />}
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
            <IonIcon icon={call} color="dark" className="textfieldIcon" />
          </div>
        </IonItem>
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
        <IonItem className="textfield">
          <IonInput
            type="password"
            value={confirmPassword}
            onIonChange={(e: any) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <div className="textLabel" slot="start">
            <IonIcon icon={lock} color="dark" className="textfieldIcon" />
          </div>
        </IonItem>
        <IonItem className="textfield">
          <IonButton
            expand="full"
            className="Registerbutton"
            onClick={() => signup()}
          >
            REGISTER
          </IonButton>
        </IonItem>
      </IonList>
    </>
  );
};

export default Register;
