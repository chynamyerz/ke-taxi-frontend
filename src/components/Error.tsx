import { IonAlert } from "@ionic/react";
import React, { useState } from "react";

const Error: React.FC<{ message: string }> = props => {
  const [showAlert, setShowAlert] = useState(true);
  const { message } = props;
  return (
    <>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Error"}
        message={message}
        buttons={["Exit"]}
      />
    </>
  );
};
export default Error;
