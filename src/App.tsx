import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { logIn } from "ionicons/icons";
import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "./assets/images/Group3.svg";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { USER_QUERY } from "./graphql/Query";
import Navigation from "./navigation/Navigation";
import Routes from "./Routes";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState({ response: "" });
  const { data, error, loading } = useQuery(USER_QUERY);

  if (loading) {
    return <Loader message={"Loading"} />;
  }

  if (error && !errors.response) {
    setErrors({
      ...errors,
      response: error.message
        .replace("GraphQL error: ", "")
        .replace("Network error: ", "")
    });
  }

  if (data && data.user && !currentUser) {
    setCurrentUser(data.user);
  } else if (data && !data.user && currentUser) {
    setCurrentUser(null);
  }

  return (
    <IonApp>
      <IonHeader slot={"start"}>
        <IonToolbar>
          <IonButtons slot={"start"}>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <img src={Logo} alt="Ke-Taxi" />
            <IonTitle
              style={{ marginLeft: "auto", marginRight: "auto" }}
            ></IonTitle>
          </Link>
          {!currentUser && (
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "black" }}
              slot={"end"}
            >
              <IonButtons style={{ paddingRight: "10px" }}>
                <IonIcon icon={logIn} color="dark" mode="ios" size={"large"} />{" "}
                Sign-in
              </IonButtons>
            </Link>
          )}
        </IonToolbar>
      </IonHeader>

      <IonPage style={{ marginTop: "50px" }}>
        <Navigation user={currentUser} />
        <IonContent scrollY={false} id={"main"}>
          {errors.response && <Error message={errors.response} />}
          <Routes />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
