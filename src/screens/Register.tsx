import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Redirect } from "react-router";
import email from "../assets/images/email.svg";
import lock from "../assets/images/lock.svg";
import phone from "../assets/images/phone.svg";
import unlock from "../assets/images/unlock.svg";
import User from "../assets/images/user.svg";
import { SIGNUP_MUTATION } from "../graphql/Mutation";
import "./Register.css";
const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
    variables: { name, emailAddress, cell, password }
  });

  if (error) {
    return <p>{error.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data && data.signup && data.signup.id) {
    return <Redirect to="/" />;
  }

  return (
    <IonList className="au-form">
      <IonItem className="textfield">
        <IonInput
          type="text"
          value={name}
          placeholder="Full name"
          onIonChange={(e: any) => setName(e.target.value)}
        />
        <div className="textLabel" slot="start">
          <img src={User} alt="user" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput
          type="text"
          value={emailAddress}
          placeholder="Email address"
          onIonChange={(e: any) => setEmailAddress(e.target.value)}
        />
        <div className="textLabel" slot="start">
          <img src={email} alt="email" />
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
          <img src={phone} alt="phone" />
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
          <img src={unlock} alt="unlock" />
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
          <img src={lock} alt="lock" />
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
  );
};

export default Register;
