import { IonButton, IonInput, IonItem, IonList } from "@ionic/react";
import React from "react";
import back_register from "../assets/images/back_register.svg";
import email from "../assets/images/email.svg";
import lock from "../assets/images/lock.svg";
import "./Register.css";

const Login: React.FC = () => {
  return (
    <IonList className="au-form">
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Email"></IonInput>
        <div className="textLabel" slot="start">
          <img src={email} alt="email" />
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
          SIGNIN
        </IonButton>
      </IonItem>
      <div className="" slot="start">
        <img src={back_register} alt="register" />
      </div>
    </IonList>
  );
};

export default Login;
