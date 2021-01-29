import React from "react";
import { View, StyleSheet, ActivityIndicator, Platform } from "react-native";

// colors
import Colors from "../constants/Colors";

const LoadingIndicator = (props) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator
        size={Platform.OS === "android" ? "large" : "small"}
        color={Platform.OS === "android" ? Colors.primary : "#999999"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default LoadingIndicator;
