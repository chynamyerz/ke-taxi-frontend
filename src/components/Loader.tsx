import React, { useState } from "react";
import { IonLoading, IonButton, IonContent } from "@ionic/react";

const Loader: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 5000);

  return (
    <>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
        duration={5000}
      />
    </>
  );
};
export default Loader;
