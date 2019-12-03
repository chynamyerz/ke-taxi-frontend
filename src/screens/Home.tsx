import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { add, close, people, person, disc } from "ionicons/icons";
import React, { useState } from "react";
import Location from "../components/Location";
import Riders from "../components/Riders";

const Home: React.FC = () => {
  const [RidersValue, setRidersValue] = useState(0);

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
          <Location></Location>
          <Riders
            RidersValue={RidersValue}
            setRidersValue={setRidersValue}
          ></Riders>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
