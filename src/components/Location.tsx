import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import React from "react";
import { disc } from "ionicons/icons";
import "./Location.css";

const Location: React.FC = () => {
  return (
    <IonCard style={{ marginBottom: "5em" }}>
      <IonCardContent>
        <IonRow>
          {/* <IonCol size="1" style={{ paddingTop: "1.3em" }}>
          <IonIcon icon={disc} className="from_icon" size="small" />
          <div className="vl"></div>
          <IonIcon icon={disc} className="to_icon" size="small" />
        </IonCol> */}
          <IonCol
            sizeSm={"10"}
            offsetSm={"1"}
            sizeMd={"8"}
            offsetMd={"2"}
            sizeLg={"10"}
            offsetLg={"3"}
          >
            <IonItem>
              <IonSelect placeholder="From" className="location">
                <IonSelectOption value="f">Up Town</IonSelectOption>
                <IonSelectOption value="m">Down Town</IonSelectOption>
              </IonSelect>
            </IonItem>
            <br />
            <IonItem className="toLocation">
              <IonSelect placeholder="To" className="location">
                <IonSelectOption value="f">Bus Stop 1</IonSelectOption>
                <IonSelectOption value="m">Taxi Rank</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
};

export default Location;
