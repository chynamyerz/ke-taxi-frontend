import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonRow
} from "@ionic/react";
import { call, mail, person } from "ionicons/icons";
import React from "react";
import Pageinfo from "../components/PageInfo";
import "./Profile.css";
const Profile: React.FC = () => {
  return (
    <>
      <IonContent style={{ height: "40%" }}>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
              <Pageinfo title="Profile"></Pageinfo>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="footer">
        <IonCard className="FooterCard">
          <IonCardContent>
            <IonList className="au-form">
              <IonItem className="textfield">
                <IonInput type="text" placeholder="Full Name"></IonInput>
                <div className="textLabel" slot="start">
                  <IonIcon
                    icon={person}
                    color="dark"
                    className="textfieldIcon"
                  />
                </div>
              </IonItem>
              <IonItem className="textfield">
                <IonInput type="text" placeholder="Email"></IonInput>
                <div className="textLabel" slot="start">
                  <IonIcon
                    icon={mail}
                    color="dark"
                    mode="ios"
                    className="textfieldIcon"
                  />
                </div>
              </IonItem>
              <IonItem className="textfield">
                <IonInput type="text" placeholder="Cellphone"></IonInput>
                <div className="textLabel" slot="start">
                  <IonIcon icon={call} color="dark" className="textfieldIcon" />
                </div>
              </IonItem>
              <IonItem className="textfield">
                <IonButton expand="full" className="Registerbutton">
                  UPDATE
                </IonButton>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonFooter>
    </>
  );
};

export default Profile;
