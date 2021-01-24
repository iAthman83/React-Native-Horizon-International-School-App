import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

// color
import Colors from "../constants/Colors";

const HeaderText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, ...props.style }}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: Colors.accent,
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "700",
    // paddingLeft: 20,
  },
});

export default HeaderText;
