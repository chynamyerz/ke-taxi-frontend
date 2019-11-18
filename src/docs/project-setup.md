# Ke-Taxi

The Ke-Taxi project is built using morden technologies.
The [JavaScript](https://www.tutorialspoint.com/javascript/index.htm) (Enhanced with [Typescript](https://www.typescriptlang.org/docs/home.html)) is used as the base programming language.
Adding to that ,a [React](https://reactjs.org/) framework (which is a JavaScript framework) is primarly used with an
[Ionic](https://ionicframework.com/) framework (which is a cross platform mobile app development) for rendering the user interface.
[Capitor](https://capacitor.ionicframework.com/docs/getting-started/) The Native Bridge for Cross-Platform Web Apps is used to compile the application to native application in cross platform.
[Apollo](https://www.apollographql.com/docs/react/api/react-apollo/) is used as a state management.
[Jest](https://jestjs.io/docs/en/getting-started) and [Enzyme](https://airbnb.io/enzyme/) are used for testing.
[Github Actions](https://github.com/features/actions) are used for the Continuous Integration and Deployment

# Project Setup

This project setup assumes that you have the following installed already:
** [Nodejs]() version 10.x.y and above
** [Yarn]() version 1.x.y and above
\*\* [Git]() version 2.x.y and above

if not installed, please make sure to install the listed before moving forward

## Creating the application

The Ke-Taxi application is created by means of the [Create React App](https://github.com/facebook/create-react-app),
which is a standard way of creating React applications.
Since React is a JavaScript framework, its does not support or enforce data types.
Thanks to Typescript we can enhance React to support or enforce data types.

The following commands are executed to create a pure react app with Typescript enabled project

```sh
mkdir ke-taxi && cd ke-taxi
yarn create react-app ke-taxi-frontend --typescript
cd ke-taxi-frontend
yarn start
```

## Add Ionic

To add Ionic in the created project make sure you are in the root directory and execute the following command

```sh
yarn @ionic/core @ionic/react react-router react-router-dom @types/react-router @types/react-router-dom
```

To enable the styling of Ionic in the whole project, add the following lines into the `index.tsx` file

```typescript
// Ionic 4 styles
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
```

By modifying the `App.tsx` file with the following lines

```typescript
const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader slot={"start"}>
        <IonToolbar>
          <IonButtons slot={"start"}>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Tittle</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>Hello React & Ionic!</h1>
      </IonContent>
    </IonApp>
  );
};
```

Should see the changes with the Ionic effect.

## Add Capitor

To add Capacitor in the created project make sure you are in the project root directory and execute the following commands

```sh
yarn add @capacitor/core @capacitor/cli @capacitor/android
```

## Add Apollo

To add Apollo in the created project make sure you are in the project root directory and execute the following commands

```sh
yarn add apollo-client apollo-link-http apollo-cache-inmemory graphql graphql-tag react-apollo
```

To enable Apollo with the React Router support which was installed earlier on in the whole project, add the following lines into the `index.tsx` file

```typescript
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
    uri: "link/to/api"
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
```

## Add Enzyme

To add Enzyme in the created project make sure you are in the project root directory and execute the following commands

```sh
yarn add enzyme enzyme-adapter-react-16 enzyme-to-json jest-enzyme @types/enzyme @types/enzyme-adapter-react-16
```

To enable Enzyme in the whole project, create a `setupTests.ts` file in the root directory and add the following content

```typescript
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({ adapter: new Adapter() });
```

## Add Jest

Jest is shipped along when used the create react-app, which we did in this case.
To configure Jest, create the `jest.config.ts` file in the root directory and add the following content

```typescript
module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
```

To make sure that we can test React with Ionic, we need to modify the test command in the `package.json` with the following

```json
  "test": "CI=true react-scripts test --env=jsdom --transformIgnorePatterns \"node_modules/(?!(@ionic|ionicons))/\"",
```

## Add Github Actions

Github Actions feature is used for conitnuous integration and deployment.
To enable that we need to create the `.github/workflows` directory in the project root directory.
We have three workflows each responsible for different environment.

Firstly is the feature workflow, defined in the `feature.yml` file, which is responsible for the feature branches.

```yml
#  The Ke-Taxi Frontend Features Workflow
name: Ke-Taxi Frontend Features Workflow

# This workflow is triggered whenever there are new commits pushed to the features branch.
on:
  push:
    branches:
      - "*"
      - "!development"
      - "!master"

jobs:
  job1:
    # The job for building and testing the code inside the github virtual machine.
    name: Build, test and run the app on the github virtual machine
    # This job is executed on the Linux machine.
    runs-on: ubuntu-latest

    # The matrix strategy is used to specify the nodejs version to use for the node packages management.
    strategy:
      # In this case, nodejs version 10.x is used.
      # To include more versions, you add them as follows: [8.x, 10.x, 12.x, ...].
      matrix:
        node-version: [10.x]

    # The steps to be executed for this job.
    steps:
      # This step uses the checkout action to make sure the latest code is used.
      - name: Use the latest code
        uses: actions/checkout@v1
      # This step uses the setup-node action to setup the nodejs environment.
      - name: Setup the nodejs environment
        uses: actions/setup-node@v1
        # The setup-node action accepts parameters.
        # In this case, the nodejs version parameter specifying the version of nodejs to use is supplied.
        with:
          node-version: ${{ matrix.node-version }}
      # This specifies the commands to run after the build is done.
      # The first command is for installing the nodejs packages.
      # The second command is for typescript linting.
      # The third command is for executing the tests.
      - run: |
          yarn install
          yarn lint
          yarn test
        shell: bash
```

Secondly is the development workflow, defined in the `development.yml` file, which is responsible for the development branch

```yml
# The Ke-Taxi Frontend Development Workflow
name: Ke-Taxi Frontend Development Workflow

# This workflow is triggered whenever there are new commits pushed to the development branch.
on:
  push:
    branches:
      - development

jobs:
  job1:
    # The job for building and testing the code inside the github virtual machine.
    name: Build, test and run the app on the github virtual machine
    # This job is executed on the Linux machine.
    runs-on: ubuntu-latest

    # The matrix strategy is used to specify the nodejs version to use for the node packages management.
    strategy:
      # In this case, nodejs version 10.x is used.
      # To include more versions, you add them as follows: [8.x, 10.x, 12.x, ...].
      matrix:
        node-version: [10.x]

    # The steps to be executed for this job.
    steps:
      # This step uses the checkout action to make sure the latest code is used.
      - name: Use the latest code
        uses: actions/checkout@v1
      # This step uses the setup-node action to setup the nodejs environment.
      - name: Setup the nodejs environment
        uses: actions/setup-node@v1
        # The setup-node action accepts parameters.
        # In this case, the nodejs version parameter specifying the version of nodejs to use is supplied.
        with:
          node-version: ${{ matrix.node-version }}
      # This specifies the commands to run after the build is done.
      # The first command is for installing the nodejs packages.
      # The second command is for typescript linting.
      # The third command is for executing the tests.
      - run: |
          yarn install
          yarn lint
          yarn test
        shell: bash
  # TODO UPDATE
  # Add job2 that is responsible for deploying to the development and it requires job1 to have ran successfully
```

Thirdly is the master workflow, defined in the `master.yml` file, which is responsible for the master branch.

```yml
# The Ke-Taxi Frontend Master Workflow
name: Ke-Taxi Frontend Master Workflow

# This workflow is triggered whenever there are new commits pushed to the master branch.
on:
  push:
    branches:
      - master

jobs:
  job1:
    # The job for building and testing the code inside the github virtual machine.
    name: Build, test and run the app on the github virtual machine
    # This job is executed on the Linux machine.
    runs-on: ubuntu-latest

    # The matrix strategy is used to specify the nodejs version to use for the node packages management.
    strategy:
      # In this case, nodejs version 10.x are used.
      # To include more versions, you can add them as follows: [8.x, 10.x, 12.x, ...].
      matrix:
        node-version: [10.x]

    # The steps to be executed for this job.
    steps:
      # This step uses the checkout action to make sure the latest code is used.
      - name: Use the latest code
        uses: actions/checkout@v1
      # This step uses the setup-node action to setup the nodejs environment.
      - name: Setup the nodejs environment
        uses: actions/setup-node@v1
        # The setup-node action accepts parameters.
        # In this case, the nodejs version parameter specifying the version of nodejs to use is supplied.
        with:
          node-version: ${{ matrix.node-version }}
      # This specifies the commands to run after the build is done.
      # The first command is for installing the nodejs packages.
      # The second command is for typescript linting.
      # The third command is for executing the tests.
      - run: |
          yarn install
          yarn lint
          yarn test
        shell: bash
  # TODO UPDATE
  # Add job2 that is responsible for deploying to the production+20 and it requires job1 to have ran successfully
```
