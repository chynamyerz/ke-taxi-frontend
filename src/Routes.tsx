import { IonCard, IonCardHeader, IonCardTitle, IonContent } from "@ionic/react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/screen2" component={Screen2} />

    <Route exact path="/screen1" component={Screen1} />

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
