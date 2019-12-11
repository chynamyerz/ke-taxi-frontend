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
import Trip from "../components/Trip";
import Pageinfo from "../components/PageInfo";

const History: React.FC = () => {
  return (
    <IonContent scrollY>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
            <Pageinfo title="History"></Pageinfo>
            <h2>All Your Previous Trips</h2>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default History;
