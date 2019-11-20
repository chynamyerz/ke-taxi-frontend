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
          <IonButtons slot={"start"}>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className="ke-Taxi">
            <img src={Logo} alt="Ke-Taxi" />
          </IonTitle>
          <IonButtons slot={"end"} style={{ paddingRight: "10px" }}>
            <img src={signin} alt="signin" />
          </IonButtons>
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
