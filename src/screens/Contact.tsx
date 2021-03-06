import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow
} from "@ionic/react";
import { call, logoFacebook, logoTwitter, mail } from "ionicons/icons";
import React from "react";
import Pageinfo from "../components/PageInfo";
const Contact: React.FC = () => {
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
            <Pageinfo title="Contact us"></Pageinfo>
            <IonCard className="Grid">
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonIcon icon={call} color="dark" size="large" />
                </IonAvatar>

                <IonLabel>071 536 2589</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonIcon icon={mail} color="dark" size="large" />
                </IonAvatar>

                <IonLabel>info@ke-taxi.co.za</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonIcon icon={logoFacebook} color="dark" size="large" />
                </IonAvatar>

                <IonLabel>ke-taxi@facebook.com</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonAvatar slot="start">
                  <IonIcon icon={logoTwitter} color="dark" size="large" />
                </IonAvatar>

                <IonLabel>@ke_taxi</IonLabel>
              </IonItem>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Contact;
