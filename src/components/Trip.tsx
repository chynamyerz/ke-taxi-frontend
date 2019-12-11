import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton
} from "@ionic/react";
import React from "react";

import { pin, radioButtonOn } from "ionicons/icons";

const Trip: React.FC<{ trip: any }> = props => {
  const { trip } = props;
  return (
    <IonCard style={{ marginTop: "2em" }}>
      <IonCardContent>
        <IonLabel>5-12-2019 17:30 PM</IonLabel>
        <IonGrid style={{ textAlign: "center" }}>
          <IonRow>
            <IonCol size="4">{trip.time}</IonCol>

            <IonCol size="4">{trip.riders} People</IonCol>

            <IonCol size="4">{trip.distance} km</IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem lines="none">
            <IonLabel>15 avanue on lewis Down Town</IonLabel>
            <div slot="start">
              <IonIcon icon={pin} color="dark" />
            </div>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>5th road newlands west </IonLabel>
            <div slot="start">
              <IonIcon icon={radioButtonOn} color="dark" />
            </div>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default Trip;
