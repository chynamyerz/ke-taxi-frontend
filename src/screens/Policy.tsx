import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow
} from "@ionic/react";
import React from "react";
import Loader from "../components/Loader";

const Policy: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4"></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Policy;
