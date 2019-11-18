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
          <IonButtons slot={"start"} style={{ paddingLeft: "10px" }}>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>
            <img src={Logo} alt="Ke-Taxi" />
          </IonTitle>
          <IonButtons slot={"end"} style={{ paddingRight: "10px" }}>
            <img src={signin} alt="signin" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonPage style={{ marginTop: "30px" }}>
        <Navigation />
        <IonContent scrollY={false} id={"main"}>
          <Routes />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
