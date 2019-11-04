import {
  IonApp,
  IonButtons,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
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
          <IonTitle>
            Ke-Taxi
            <IonCardSubtitle>A new way to use public taxis</IonCardSubtitle>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonPage style={{ marginTop: "3.5em" }}>
        <Navigation />
        <IonContent id={"main"}>
          <Routes />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
