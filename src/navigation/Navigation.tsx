import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <IonMenu contentId={"main"} slot={"start"}>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonMenuToggle>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <IonLabel>Home</IonLabel>
              </Link>
            </IonMenuToggle>
          </IonItem>

          <IonItem>
            <IonMenuToggle>
              <Link
                to={"/screen1"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonLabel>Screen1</IonLabel>
              </Link>
            </IonMenuToggle>
          </IonItem>

          <IonItem>
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
