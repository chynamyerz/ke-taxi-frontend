import {
  IonFooter,
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonToolbar,
  IonTitle
} from "@ionic/react";
import { person } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import userCircle from "../assets/images/sideNav/userCircle.svg";
import user from "../assets/images/sideNav/userOutline.svg";
import phone from "../assets/images/sideNav/phone-1.svg";
import about from "../assets/images/sideNav/about.svg";
import policy from "../assets/images/sideNav/policy.svg";
import history from "../assets/images/sideNav/history.svg";
import logout from "../assets/images/sideNav/logout.svg";

const Navigation: React.FC = () => {
  return (
    <IonMenu contentId={"main"} slot={"start"}>
      <IonHeader translucent>
        <IonToolbar className="titleBar">
          <IonItem lines="none" className="HeaderItems">
            <IonAvatar slot="start">
              <IonIcon icon={userCircle} color="dark" size="large" />
            </IonAvatar>

            <IonLabel>
              Mr Incredible <br /> Incredible@hero.com
            </IonLabel>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem lines="none">
            <IonMenuToggle>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonIcon
                      icon={user}
                      color="dark"
                      size="large"
                      className="sideIcons"
                    />
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
                    <IonIcon
                      icon={phone}
                      color="dark"
                      size="large"
                      className="sideIcons"
                    />
                  </IonAvatar>

                  <IonLabel>Contact Us</IonLabel>
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
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonIcon
                      icon={about}
                      color="dark"
                      size="large"
                      className="sideIcons"
                    />
                  </IonAvatar>

                  <IonLabel>About Us</IonLabel>
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
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonIcon
                      icon={policy}
                      color="dark"
                      size="large"
                      className="sideIcons"
                    />
                  </IonAvatar>

                  <IonLabel>Policy</IonLabel>
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
                <IonItem lines="none">
                  <IonAvatar slot="start">
                    <IonIcon
                      icon={history}
                      color="dark"
                      size="large"
                      className="sideIcons"
                    />
                  </IonAvatar>

                  <IonLabel>History</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem lines="none" className="footerButton">
            <IonAvatar slot="start" className="footerIcon">
              <IonIcon
                icon={logout}
                color="dark"
                size="large"
                className="sideIcons"
              />
            </IonAvatar>

            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default Navigation;
