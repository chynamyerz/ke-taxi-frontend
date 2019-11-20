import { IonButton, IonInput, IonItem, IonList, IonIcon } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import back_register from "../assets/images/back_register.svg";
import { lock, mail } from "ionicons/icons";
import "./Signup.css";

const Signin: React.FC = () => {
  return (
    <IonList className="au-form">
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Email"></IonInput>
        <div className="textLabel" slot="start">
          <IonIcon
            icon={mail}
            color="dark"
            mode="ios"
            className="textfieldIcon"
          />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput type="text" placeholder="Confirm Password"></IonInput>
        <div className="textLabel" slot="start">
          <IonIcon icon={lock} color="dark" className="textfieldIcon" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonButton expand="full" className="Registerbutton">
          SIGNIN
        </IonButton>
      </IonItem>
      <Link
        to={"/signup"}
        style={{ textDecoration: "none", color: "black" }}
        slot={"start"}
      >
        <img src={back_register} alt="register" />
      </Link>
    </IonList>
  );
};

export default Signin;
