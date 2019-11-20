import { IonButton, IonIcon, IonInput, IonItem, IonList } from "@ionic/react";
import { lock, mail } from "ionicons/icons";
import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Link, Redirect } from "react-router-dom";
import back_register from "../assets/images/back_register.svg";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { GET_USER_MUTATION } from "../graphql/Mutation";
import { USER_QUERY } from "../graphql/Query";
import "./Signup.css";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedin, setSignedin] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    response: ""
  });
  const [getUser, { loading }] = useMutation(GET_USER_MUTATION, {
    refetchQueries: [{ query: USER_QUERY }],
    variables: { email, password }
  });

  if (loading) {
    return <Loader message={"Signing in..."} />;
  }

  if (signedin) {
    return <Redirect to="/home" />;
  }

  const signin = async () => {
    try {
      const loggedInUser = await getUser({
        variables: { email, password }
      });

      if (!loggedInUser.data.login) {
        return;
      }

      setEmail("");
      setPassword("");
      setSignedin(true);
      setErrors({
        email: "",
        password: "",
        response: ""
      });
    } catch (error) {
      setErrors({
        ...errors,
        response: error.message
          .replace("GraphQL error: ", "")
          .replace("Network error: ", "")
      });
    }
  };

  return (
    <IonList className="au-form">
      {errors.response && <Error message={errors.response} />}
      <IonItem className="textfield">
        <IonInput
          type="text"
          value={email}
          placeholder="Email address"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <div className="textLabel" slot="start">
          <IonIcon
            icon={mail}
            color="dark"
            mode="ios"
            className="textfieldIcon"
          />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonInput
          type="password"
          value={password}
          onIonChange={(e: any) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="textLabel" slot="start">
          <IonIcon icon={lock} color="dark" className="textfieldIcon" />
        </div>
      </IonItem>
      <IonItem className="textfield">
        <IonButton
          expand="full"
          className="Registerbutton"
          onClick={() => signin()}
        >
          SIGNIN
        </IonButton>
      </IonItem>
      <Link
        to={"/signup"}
        style={{ textDecoration: "none", color: "black" }}
        slot={"start"}
      >
        <img src={back_register} alt="register" />
      </Link>
    </IonList>
  );
};

export default Signin;
