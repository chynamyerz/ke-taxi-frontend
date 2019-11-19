import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Ionic 4 styles
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    credentials: "include",
    uri: process.env.REACT_APP_API_URI
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
