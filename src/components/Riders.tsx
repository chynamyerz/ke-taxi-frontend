import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonModal,
  IonSegment,
  IonItem,
  IonSegmentButton,
  IonLabel
} from "@ionic/react";
import React, { useState } from "react";
import { person, people, add, close } from "ionicons/icons";
import "./Riders.css";

const Riders: React.FC<{
  RidersValue: Number;
  setRidersValue: Function;
}> = props => {
  const { RidersValue, setRidersValue } = props;
  const [showModal, setShowModal] = useState(false);
  const [isMeActive, setisMeActive] = useState(false);
  const [isGroupActive, setisGroupActive] = useState(false);

  const riders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const listItems = riders.map(rider => (
    <IonSegmentButton
      onClick={() => {
        setRidersValue(rider);
      }}
      className="NumberButton"
      key={rider}
    >
      <IonLabel>{rider}</IonLabel>
    </IonSegmentButton>
  ));
  return (
    <IonCard className="riders" style={{ height: "50%" }}>
      <IonCardContent>
        <h2 className="ridesharing">Ride sharing :</h2>
        <IonGrid className="options">
          <IonRow>
            <IonCol className="cardOption">
              <IonCard
                onClick={() => {
                  setisMeActive(true);
                  setisGroupActive(false);
                  setRidersValue(1);
                }}
                className={isMeActive ? "cardGroups active" : "cardGroups"}
                button={true}
              >
                <IonCardContent className="optionIcons">
                  <IonIcon
                    icon={person}
                    className={isMeActive ? "Activeicon" : "NonActiveIcon"}
                    size="large"
                  />
                  <p className="ridesharing">Me</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol className="cardOption">
              <IonCard
                onClick={() => {
                  setShowModal(true);
                  setisGroupActive(true);
                  setisMeActive(false);
                }}
                className={isGroupActive ? "cardGroups active" : "cardGroups"}
                button={true}
              >
                <IonCardContent className="optionIcons">
                  <IonIcon
                    icon={people}
                    className={isGroupActive ? "Activeicon" : "NonActiveIcon"}
                    size="large"
                    mode="ios"
                  />
                  <p className="ridesharing">+ Group</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow style={{ marginTop: "5%" }}>
            <p className="ridesharing">
              {RidersValue > 1
                ? "Ride For " + RidersValue + " people"
                : "Ride For Only Me"}
            </p>
          </IonRow>
          <IonRow style={{ marginTop: "5%" }}>
            <IonCol>
              <IonButton expand="full" className="CallTaxibutton">
                CALL TAXI{" "}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonModal cssClass="Model" isOpen={showModal}>
            <p className="popHeader">Pick the number of passagers</p>
            {/*-- Scrollable Segment --*/}
            <IonSegment className="picker" scrollable>
              {listItems}
            </IonSegment>
            <IonItem lines="none" className="ModelButtons">
              <IonButton
                slot="start"
                className="closeButton"
                onClick={() => setShowModal(false)}
              >
                <IonIcon icon={add} color="light" size="large" />
              </IonButton>
              <IonButton
                slot="end"
                className="closeButton"
                onClick={() => setShowModal(false)}
              >
                <IonIcon icon={close} color="light" size="large" />
              </IonButton>
            </IonItem>
          </IonModal>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};
export default Riders;
