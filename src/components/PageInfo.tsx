import { IonAvatar, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { arrowBack, close } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <IonIcon
            icon={close}
            color="dark"
            size="large"
            className="sideIcons"
          />
        </Link>
      </IonAvatar>
    </IonItem>
  );
};

export default PageInfo;
