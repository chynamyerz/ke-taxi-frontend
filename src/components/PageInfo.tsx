import { IonItem, IonLabel } from "@ionic/react";
import React from "react";
import "./PageInfo.css";

const PageInfo: React.FC<{ title: string }> = props => {
  const { title } = props;
  return (
    <IonItem lines="none" className="innerToolbar">
      <IonLabel className="pageTitle">{title}</IonLabel>
    </IonItem>
  );
};

export default PageInfo;
