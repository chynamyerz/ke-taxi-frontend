import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "./assets/images/Group3.svg";
import signin from "./assets/images/signin.svg";
import Navigation from "./navigation/Navigation";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader slot={"start"}>
        <IonToolbar>
          <IonButtons slot={"start"} style={{ paddingLeft: "10px" }}>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <IonTitle style={{ marginLeft: "auto", marginRight: "auto" }}>
              <img src={Logo} alt="Ke-Taxi" />
            </IonTitle>
          </Link>
          <Link
            to={"/signin"}
            style={{ textDecoration: "none", color: "black" }}
            slot={"end"}
          >
            <IonButtons style={{ paddingRight: "10px" }}>
              <img src={signin} alt="signin" />
            </IonButtons>
          </Link>
        </IonToolbar>
      </IonHeader>

      <IonPage style={{ marginTop: "50px" }}>
        <Navigation />
        <IonContent scrollY={false} id={"main"}>
          <Routes />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
