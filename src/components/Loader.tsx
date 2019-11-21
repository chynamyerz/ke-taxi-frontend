import { IonLoading } from "@ionic/react";
import React, { useState } from "react";

const Loader: React.FC<{ message: string }> = props => {
  const { message } = props;
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={message}
      />
    </>
  );
};
export default Loader;
