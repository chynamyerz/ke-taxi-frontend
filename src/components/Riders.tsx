import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { add, close, people, person } from "ionicons/icons";
import React, { useState } from "react";
import "./Riders.css";

const Riders: React.FC = () => {
  const [RidersValue, setRidersValue] = useState(0);
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
    <IonCard className="riders">
      <IonCardContent>
        <IonGrid>
          <h2 className="ridesharing">From where to :</h2>
          <IonRow>
            <IonCol
              sizeSm={"10"}
              offsetSm={"1"}
              sizeMd={"8"}
              offsetMd={"2"}
              sizeLg={"6"}
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
          <h2 className="ridesharing">Ride sharing :</h2>
          <IonRow>
            <IonCol
              sizeSm={"10"}
              offsetSm={"1"}
              sizeMd={"8"}
              offsetMd={"2"}
              sizeLg={"6"}
              offsetLg={"3"}
            >
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

            <IonCol
              sizeSm={"10"}
              offsetSm={"1"}
              sizeMd={"8"}
              offsetMd={"2"}
              sizeLg={"6"}
              offsetLg={"3"}
            >
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
            <IonCol
              sizeSm={"10"}
              offsetSm={"1"}
              sizeMd={"8"}
              offsetMd={"2"}
              sizeLg={"6"}
              offsetLg={"3"}
            >
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
