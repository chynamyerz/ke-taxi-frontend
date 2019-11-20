import { IonCard, IonCardHeader, IonCardTitle, IonContent } from "@ionic/react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import History from "./screens/History";
import Home from "./screens/Home";
import Policy from "./screens/Policy";
import Profile from "./screens/Profile";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component={About} />
    <Route exact path="/policy" component={Policy} />
    <Route exact path="/history" component={History} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={Signup} />
    <Route
      exact
      path="*"
      component={() => (
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>404 No page found</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
      )}
    />
  </Switch>
);

export default Routes;
