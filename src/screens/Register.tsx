import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";
import React from "react";
import email from "../assets/images/email.svg";
import lock from "../assets/images/lock.svg";
import phone from "../assets/images/phone.svg";
import unlock from "../assets/images/unlock.svg";
import User from "../assets/images/user.svg";
import "./Register.css";
const Register: React.FC = () => {
  return (
    <IonList className="au-form">
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Full Name"></IonInput>
        <div className="textLabel" slot="start">
          <img src={User} alt="user" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Email"></IonInput>
        <div className="textLabel" slot="start">
          <img src={email} alt="email" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Cellphone no."></IonInput>
        <div className="textLabel" slot="start">
          <img src={phone} alt="phone" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Password"></IonInput>
        <div className="textLabel" slot="start">
          <img src={unlock} alt="unlock" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Confirm Password"></IonInput>
        <div className="textLabel" slot="start">
          <img src={lock} alt="lock" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonButton expand="full" className="Registerbutton">
          REGISTER
        </IonButton>
      </IonItem>
    </IonList>
  );
};

export default Register;
