import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow
} from "@ionic/react";
import { pin, radioButtonOn } from "ionicons/icons";
import React from "react";

const Request: React.FC<{ request: any }> = props => {
  const { request } = props;
  return (
    <IonCard>
      <IonCardHeader style={{ textAlign: "center" }}>
        <IonCardTitle>R {request.price}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid style={{ textAlign: "center" }}>
          <IonRow>
            <IonCol size="4">{request.time}</IonCol>

            <IonCol size="4">{request.riders} People</IonCol>

            <IonCol size="4">{request.distance} km</IonCol>
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
