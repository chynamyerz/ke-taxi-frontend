import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonRow,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { people, person } from "ionicons/icons";
import React from "react";
import "./Home.css";

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
          <IonCard style={{ height: "30%" }}>
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
                  <IonItem style={{ marginTop: "15%" }}>
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
                    <IonCard className="cardGroups active" button={true}>
                      <IonCardContent className="optionIcons">
                        <IonIcon icon={person} color="light" size="large" />
                        <p className="ridesharing">Me</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol className="cardOption">
                    <IonCard className="cardGroups" button={true}>
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
                    <IonCard className="cardGroups" button={true}>
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
                <IonRow style={{ marginTop: "10%" }}>
                  <p className="ridesharing">Ride with only Me</p>
                </IonRow>
                <IonRow style={{ marginTop: "12%" }}>
                  <IonCol>
                    <IonButton expand="full" className="CallTaxibutton">
                      CALL TAXI{" "}
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Home;
