import { IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Request from "../components/Request";
import Riders from "../components/Riders";

const Home: React.FC<{ isDriver: boolean }> = props => {
  const { isDriver } = props;
  return (
    <IonGrid style={{ height: "100%" }}>
      <IonRow style={{ height: "100%" }}>
        <IonCol
          sizeSm={"10"}
          offsetSm={"1"}
          sizeMd={"8"}
          offsetMd={"2"}
          sizeLg={"6"}
          offsetLg={"3"}
        >
          {isDriver ? (
            <div>
              <h1 style={{ textAlign: "center" }}>Ride requests</h1>
              <Request
                request={{
                  price: 50,
                  riders: 1,
                  distance: 100,
                  time: "10:10AM"
                }}
              />
            </div>
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Ride a public taxi in style
              </h1>
              <Riders />
            </div>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
