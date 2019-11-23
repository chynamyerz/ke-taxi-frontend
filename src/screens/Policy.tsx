import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonSegment,
  IonSegmentButton
} from "@ionic/react";
import React from "react";
import Pageinfo from "../components/PageInfo";
const Policy: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol
            sizeSm={"10"}
            offsetSm={"1"}
            sizeMd={"8"}
            offsetMd={"2"}
            sizeLg={"6"}
            offsetLg={"3"}
          >
            <IonCard>
              <IonCardHeader>
                <Pageinfo title="Policy"></Pageinfo>
              </IonCardHeader>
              <IonCardContent>
                <p style={{ textAlign: "center", marginBlockStart: "40%" }}>
                  Ke-Taxi - Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets
                </p>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Policy;
