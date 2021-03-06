import {
  IonAvatar,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonToolbar
} from "@ionic/react";
import { contact, home, logOut, person, time } from "ionicons/icons";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { LOGOUT_USER_MUTATION } from "../graphql/Mutation";
import { USER_QUERY } from "../graphql/Query";
import "./Navigation.css";

const Navigation: React.FC<{ user: any }> = props => {
  const { user } = props;
  const [errors, setErrors] = useState({ response: "" });
  const [signoutUser, { loading }] = useMutation(LOGOUT_USER_MUTATION, {
    refetchQueries: [{ query: USER_QUERY }]
  });

  if (loading) {
    return <Loader message={"Signing out..."} />;
  }

  const signout = async () => {
    try {
      await signoutUser();
      setErrors({
        response: ""
      });
    } catch (error) {
      setErrors({
        ...errors,
        response: error.message
          .replace("GraphQL error: ", "")
          .replace("Network error: ", "")
      });
    }
  };

  return (
    <IonMenu contentId={"main"} slot={"start"}>
      <IonHeader translucent>
        <IonToolbar className="titleBar">
          <IonItem lines="none" className="HeaderItems">
            <IonAvatar slot="start">
              <IonIcon icon={contact} color="ligh" size="large" mode="ios" />
            </IonAvatar>

            <IonLabel>
              {user ? `Hi ${user.name}` : "Not signed in"} <br />
              {user ? user.email : null}
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
                    <IonIcon icon={home} className="sideIcons" />
                  </IonAvatar>

                  <IonLabel>Home</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>

          {user && (
            <IonItem lines="none">
              <IonMenuToggle>
                <Link
                  to={"/profile"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonIcon
                        icon={person}
                        color="dark"
                        className="sideIcons"
                      />
                    </IonAvatar>

                    <IonLabel>Profile</IonLabel>
                  </IonItem>
                </Link>
              </IonMenuToggle>
            </IonItem>
          )}

          {user && (
            <IonItem>
              <IonMenuToggle>
                <Link
                  to={"/history"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <IonIcon
                        icon={time}
                        color="dark"
                        className="histroyIcon"
                      />
                    </IonAvatar>

                    <IonLabel>History</IonLabel>
                  </IonItem>
                </Link>
              </IonMenuToggle>
            </IonItem>
          )}

          <IonItem lines="none">
            <IonMenuToggle>
              <Link
                to={"/about"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonItem lines="none">
                  <IonLabel color="medium">About Us</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>
          <IonItem lines="none">
            <IonMenuToggle>
              <Link
                to={"/contact"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonItem lines="none">
                  <IonLabel color="medium">Contact Us</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>
          <IonItem lines="none">
            <IonMenuToggle>
              <Link
                to={"/policy"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonItem lines="none">
                  <IonLabel color="medium">Policy</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonItem>
        </IonList>
      </IonContent>
      {user && (
        <IonFooter>
          <IonToolbar>
            <IonMenuToggle>
              <Link
                to={"/signin"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IonItem lines="none" className="footerButton">
                  <IonAvatar slot="start" className="footerIcon">
                    <IonIcon
                      icon={logOut}
                      color="dark"
                      mode="ios"
                      className="sideIcons"
                      onClick={() => signout()}
                    />
                  </IonAvatar>
                  <IonLabel>Sign-out</IonLabel>
                </IonItem>
              </Link>
            </IonMenuToggle>
          </IonToolbar>
        </IonFooter>
      )}
    </IonMenu>
  );
};

export default Navigation;
