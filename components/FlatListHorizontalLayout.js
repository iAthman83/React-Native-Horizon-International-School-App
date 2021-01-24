import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
  Image,
} from "react-native";

import NiceColors from "../constants/niceColors";

import Card from "./Card";

const FlatListHorizontalLayout = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onPress}>
      <Card style={styles.card}>
        <View style={styles.container}>
          <View style={styles.cantactContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: props.image,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.namePosition}>
              <Text style={styles.text}>{props.title}</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    marginVertical: 3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    backgroundColor: NiceColors.colors,
    elevation: 5,
    borderRadius: 20,
    paddingVertical: 20,
  },
  container: {
    alignItems: "center",
  },
  cantactContainer: {
    flexDirection: "row",
    // justifyContent: "flex-end",
  },
  namePosition: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },
  salutation: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  imageContainer: {
    width: 80,
    height: 80,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default FlatListHorizontalLayout;
