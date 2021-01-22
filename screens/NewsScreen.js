import React from "react";

import axios from "axios";

import URL from "../utils/URL";

import { View, Text, StyleSheet } from "react-native";

const NewsScreen = (props) => {
  const newsStrapi = async () => {
    const strapi = await axios
      .get(`${URL}/events`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    return strapi;
  };
  return (
    <View style={styles.screen}>
      <Text onPress={newsStrapi}>Welcome to news screen</Text>
    </View>
  );
};

NewsScreen.navigationOptions = {
  headerTitle: "Horizon News",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsScreen;
