import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DetailText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>{props.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  details: {
    fontSize: 18,
    lineHeight: 25,
  },
});

export default DetailText;
