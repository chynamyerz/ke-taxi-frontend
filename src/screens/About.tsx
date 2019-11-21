import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Pageinfo from "../components/PageInfo";
const About: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
            <Pageinfo title="About us"></Pageinfo>
            <p style={{ textAlign: "center", marginBlockStart: "40%" }}>
              Ke-Taxi - Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default About;
