import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Hello from "../components/Hello";

const Home: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="6" offset-sm="3" size-md="4" offset-md="4">
            <Hello />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Home;
