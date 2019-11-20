import React, { useState } from "react";
import { IonAlert, IonButton, IonContent } from "@ionic/react";
interface ErrorProps {
  error: string;
  errorDesc: string;
}
const Error: React.FC<ErrorProps> = ({ error, errorDesc }) => {
  const [showAlert1, setShowAlert1] = useState(true);
  return (
    <>
      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(true)}
        header={error}
        subHeader={errorDesc}
        buttons={["Exit"]}
      />
    </>
  );
};
export default Error;
