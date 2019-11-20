import { IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { arrowBack, close } from "ionicons/icons";
import React from "react";
import "./PageInfo.css";

interface PageinfoProps {
  Title: string;
}
const PageInfo: React.FC<PageinfoProps> = ({ Title }) => {
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

      <IonLabel className="pageTitle">{Title}</IonLabel>
      <IonAvatar slot="end">
        <IonIcon icon={close} color="dark" size="large" className="sideIcons" />
      </IonAvatar>
    </IonItem>
  );
};

export default PageInfo;
