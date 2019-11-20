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

const Contact: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Contact</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel position={"floating"}>screen1 input </IonLabel>
                  <IonInput type={"text"} />
                </IonItem>

                <IonButton color={"success"} size={"small"}>
                  Button
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Contact;
