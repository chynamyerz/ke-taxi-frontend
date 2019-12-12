import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRow
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import React, { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import Pageinfo from "../components/PageInfo";
import Trip from "../components/Trip";
import "./History.css";
const History: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <IonContent scrollY>
      <IonGrid>
        <IonRow>
          <IonCol size-sm="8" offset-sm="2" size-md="4" offset-md="4">
            <Pageinfo title="History"></Pageinfo>

            <IonList>
              <IonItem onClick={() => setShowPopover(true)}>
                <IonLabel>
                  <h2>202 Old Pretoria Road</h2>
                  <p>10 Dec 2019 13:33:57</p>
                  <p>with 4 people</p>
                </IonLabel>
                <IonIcon icon={arrowForward} slot="end" mode="ios" />
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>202 Old Pretoria Road</h2>
                  <p>10 Dec 2019 13:33:57</p>
                  <p>with 4 people</p>
                </IonLabel>
                <IonIcon icon={arrowForward} slot="end" mode="ios" />
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>202 Old Pretoria Road</h2>
                  <p>10 Dec 2019 13:33:57</p>
                  <p>with 4 people</p>
                </IonLabel>
                <IonIcon icon={arrowForward} slot="end" mode="ios" />
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>202 Old Pretoria Road</h2>
                  <p>10 Dec 2019 13:33:57</p>
                  <p>with 4 people</p>
                </IonLabel>
                <IonIcon icon={arrowForward} slot="end" mode="ios" />
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>202 Old Pretoria Road</h2>
                  <p>10 Dec 2019 13:33:57</p>
                  <p>with 4 people</p>
                </IonLabel>
                <IonIcon icon={arrowForward} slot="end" mode="ios" />
              </IonItem>
            </IonList>
            <IonPopover
              isOpen={showPopover}
              onDidDismiss={e => setShowPopover(false)}
              cssClass="PopOver"
            >
              <Trip
                trip={{
                  distance: 100,
                  price: 50,
                  riders: 1,
                  time: "10:10AM"
                }}
              />
            </IonPopover>
            {/* <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip>
            <Trip
              trip={{
                distance: 100,
                price: 50,
                riders: 1,
                time: "10:10AM"
              }}
            ></Trip> */}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default History;
