import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const QuickContactAccess = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={props.iconName}
          size={27}
          color="white"
          onPress={props.onPress}
        />
      </View>
      <Text>{props.action}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accent,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default QuickContactAccess;
