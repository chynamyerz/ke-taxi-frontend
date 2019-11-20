import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonItem,
  IonRow,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { people, person } from "ionicons/icons";
import React from "react";
import left from "../assets/images/left.svg";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <IonContent style={{ height: "50%" }} scrollY={false}>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="6" offset-sm="3" size-md="4" offset-md="4">
              <IonCard>
                <IonCardContent>
                  <IonRow>
                    <IonCol className="leftSvg">
                      <img src={left} alt="left" />
                    </IonCol>
                    <IonCol size="11">
                      <IonItem>
                        <IonSelect placeholder="From" className="location">
                          <IonSelectOption value="f">Up Town</IonSelectOption>
                          <IonSelectOption value="m">Down Town</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonItem className="toLocation">
                        <IonSelect placeholder="To" className="location">
                          <IonSelectOption value="f">
                            Bus Stop 1
                          </IonSelectOption>
                          <IonSelectOption value="m">Taxi Rank</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonCard className="riders">
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
                      />
                      <p className="ridesharing">+ Group</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
              <IonRow>
                <p className="ridesharing">Ride with only Me</p>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand="full" className="CallTaxibutton">
                    CALL TAXI{" "}
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonFooter>
    </>
  );
};

export default Home;
