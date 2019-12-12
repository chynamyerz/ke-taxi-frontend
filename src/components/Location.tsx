import {
  IonCard,
  IonCardHeader,
  IonIcon,
  IonItem,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { disc, pin } from "ionicons/icons";
import React from "react";
import "./Location.css";

const Location: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonItem>
          <IonSelect placeholder="From" className="location">
            <IonSelectOption value="f">Up Town</IonSelectOption>
            <IonSelectOption value="m">Down Town</IonSelectOption>
          </IonSelect>
          <IonIcon icon={pin} slot="start" className="fromIcon" />
        </IonItem>
        <br />
        <IonItem className="toLocation">
          <IonSelect placeholder="To" className="location">
            <IonSelectOption value="f">Bus Stop 1</IonSelectOption>
            <IonSelectOption value="m">Taxi Rank</IonSelectOption>
          </IonSelect>
          <IonIcon icon={disc} slot="start" className="toIcon" />
        </IonItem>
      </IonCardHeader>
    </IonCard>
  );
};

export default Location;
