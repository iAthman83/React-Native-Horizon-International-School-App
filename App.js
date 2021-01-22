import React from "react";

// import redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import contactReducer from "./store/reducers/contactReducer";
import configureStore from "./store/configureStore";

import { enableScreens } from "react-native-screens";

import { StyleSheet } from "react-native";

// import navigation component
import AppNavigation from "./navigation/AppNavigation";

enableScreens();

// create combined reducers
// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// reate the store for the reducers
// const store = createStore(rootReducer);

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
