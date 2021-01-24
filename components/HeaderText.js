import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

// color
import Colors from "../constants/Colors";

const HeaderText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: Colors.accent,
    fontSize: 25,
    marginVertical: 10,
    fontWeight: "600",
    paddingLeft: 15,
  },
});

export default HeaderText;
