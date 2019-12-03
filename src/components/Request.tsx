import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton
} from "@ionic/react";
import React from "react";
import { radioButtonOn, pin } from "ionicons/icons";

const Request: React.FC<{
  Price: string;
  Time: string;
  Riders: string;
  Distance: string;
}> = props => {
  const { Price, Time, Riders, Distance } = props;
  return (
    <IonCard>
      <IonCardHeader style={{ textAlign: "center" }}>
        <IonCardTitle>R {Price}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid style={{ textAlign: "center" }}>
          <IonRow>
            <IonCol size="4">{Time}</IonCol>

            <IonCol size="4">{Riders} People</IonCol>

            <IonCol size="4">{Distance} km</IonCol>
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

        <IonRow>
          <IonCol size="6" size-md>
            <IonItem className="textfield">
              <IonButton expand="full" className="Registerbutton">
                Accept
              </IonButton>
            </IonItem>
          </IonCol>
          <IonCol size="6" size-md>
            <IonItem className="textfield">
              <IonButton expand="full" className="Registerbutton" color="dark">
                Decline
              </IonButton>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
};

export default Request;
