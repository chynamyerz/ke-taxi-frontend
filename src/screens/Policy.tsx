import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import React from "react";

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
