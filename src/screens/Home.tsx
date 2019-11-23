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
import "./Home.css";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const riders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [isActive, setisActive] = useState(false);

  const listItems = riders.map(rider => (
    <IonSegmentButton className="NumberButton">
      <IonLabel>{rider}</IonLabel>
    </IonSegmentButton>
  ));
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
          <IonCard style={{ marginBottom: "30%" }}>
            <IonCardContent>
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

          <IonCard className="riders" style={{ height: "65%" }}>
            <IonCardContent>
              <h2 className="ridesharing">Ride sharing :</h2>
              <IonGrid className="options">
                <IonRow>
                  <IonCol className="cardOption">
                    <IonCard
                      onClick={() => setisActive(true)}
                      className={isActive ? "cardGroups active" : "cardGroups"}
                      button={true}
                    >
                      <IonCardContent className="optionIcons">
                        <IonIcon icon={person} color="light" size="large" />
                        <p className="ridesharing">Me</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol className="cardOption">
                    <IonCard
                      onClick={() => setisActive(true)}
                      className={isActive ? "cardGroups active" : "cardGroups"}
                      button={true}
                    >
                      <IonCardContent className="optionIcons">
                        <IonIcon
                          icon={people}
                          mode="md"
                          className="iconicon"
                          size="large"
                        />
                        <p className="ridesharing">+1 person</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol className="cardOption">
                    <IonCard
                      onClick={() => {
                        setShowModal(true);
                        setisActive(true);
                      }}
                      className={isActive ? "cardGroups active" : "cardGroups"}
                      button={true}
                    >
                      <IonCardContent className="optionIcons">
                        <IonIcon
                          icon={people}
                          className="iconicon"
                          size="large"
                          mode="ios"
                        />
                        <p className="ridesharing">+ Group</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
                <IonRow style={{ marginTop: "5%" }}>
                  <p className="ridesharing">Ride with only Me</p>
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
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
