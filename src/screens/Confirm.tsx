import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import Location from "../components/Location";
import Request from "../components/Request";
import Riders from "../components/Riders";
const Home: React.FC = () => {
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
          <IonContent>
            <Location></Location>
            <div className="Bottom">
              <Riders />
            </div>
          </IonContent>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
