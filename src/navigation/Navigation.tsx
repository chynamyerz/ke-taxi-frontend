import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonAvatar,
  IonIcon,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import { person, telephone } from "ionicons/icons";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <IonMenu contentId={"main"} slot={"start"}>
      <IonHeader translucent>
        <IonToolbar className="titleBar">
          <IonAvatar>
            <IonIcon icon={person} color="light" size="large" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem lines="none">
            <IonMenuToggle>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonIcon icon={person} color="dark" size="large" />
                  </IonAvatar>

                  <IonLabel>Profile</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>

          <IonItem lines="none">
            <IonMenuToggle>
              <Link
                to={"/screen1"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonIcon icon={person} color="dark" size="large" />
                  </IonAvatar>

                  <IonLabel>Screen1</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>

          <IonItem lines="none">
            <IonMenuToggle>
              <Link
                to={"/screen2"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonLabel>Screen2</IonLabel>
              </Link>
            </IonMenuToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Navigation;
