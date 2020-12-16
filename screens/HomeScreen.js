import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Calender"
        onPress={() => {
          props.navigation.navigate("Calendar");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

HomeScreen.navigationOptions = {
  headerTitle: "HISU",
};

export default HomeScreen;
