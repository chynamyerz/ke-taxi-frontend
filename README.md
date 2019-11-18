# Ke-Taxi

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
[Ionic](https://ionicframework.com/) and [Apollo](https://www.apollographql.com/docs/react/api/react-apollo/).

## Running this project
Git clone this repository, execute the following command.

```git
git clone git@github.com:chynamyerz/ke-taxi-frontend.git
```

Then navigate to the root directory.

```sh
cd ke-taxi-frontend
```

Make sure you are in the development branch to build and run the development version,

```git
git checkout development
```
OR

in a master branch to build and run the production version.

```git
git checkout master
```

Then install the packages, execute the following command.

```yarn
yarn install
```

To run this project as a web application, execute the following command.

```yarn
yarn start
```

To run this project as an adnroid application you must have android studio installed.

Before running the application, we must first build and generate an android directory which will consist of the build files, execute the following command.

```yarn
yarn generate:android
```

Then open the ```android``` directory with android studio.
You can then run it either on the emulator or on the actual device through android studio.

When changes have been made, to update the application with the recent changes, execute the following command.

```yarn
yar sync:android
```

Then re-run the application in android studio to reflect the changes.

To run the unit tests, execute the following command

```yarn
yarn test
```

## How the project was setup?
### See the project setup documentation in the ```docs/project-setup.md``` in this repository.