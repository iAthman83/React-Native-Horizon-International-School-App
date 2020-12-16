import { StatusBar } from "expo-status-bar";
import React from "react";

import { enableScreens } from "react-native-screens";

import { StyleSheet } from "react-native";

// import navigation component
import AppNavigation from "./navigation/AppNavigation";

enableScreens();

export default function App() {
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
