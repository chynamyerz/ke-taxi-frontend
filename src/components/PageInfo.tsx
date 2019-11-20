import { IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { arrowBack, close } from "ionicons/icons";
import React from "react";
import "./PageInfo.css";

const PageInfo: React.FC<{ title: string }> = props => {
  const { title } = props;
  return (
    <IonItem lines="none" className="innerToolbar">
      <IonAvatar slot="start">
        <IonIcon
          icon={arrowBack}
          color="dark"
          size="large"
          className="sideIcons"
        />
      </IonAvatar>

      <IonLabel className="pageTitle">{title}</IonLabel>
      <IonAvatar slot="end">
        <IonIcon icon={close} color="dark" size="large" className="sideIcons" />
      </IonAvatar>
    </IonItem>
  );
};

export default PageInfo;
