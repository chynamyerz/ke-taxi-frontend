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

const Screen2: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Screen2</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonLabel position={"floating"}>screen2 input </IonLabel>
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

export default Screen2;
