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

import Colors from "../constants/Colors";

import NiceColors from "../constants/niceColors";

import { Ionicons } from "@expo/vector-icons";

import Card from "./Card";

const ContactCards = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp style={{ flex: 1 }} onPress={props.onPress}>
      <Card style={styles.card}>
        <View style={styles.container}>
          <Ionicons name="ios-heart" color={Colors.accent} size={26} />
          <View style={styles.cantactContainer}>
            <View style={styles.namePosition}>
              <View style={styles.salutation}>
                <Text style={styles.text}>{props.salutation}</Text>
                <Text> </Text>
                <Text style={styles.text}>{props.lastName}</Text>
              </View>
              <Text style={styles.text}>{props.position}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: props.imageUrl,
                }}
                style={styles.image}
              />
              {/* <Ionicons name="ios-heart" color={Colors.primary} size={24} /> */}
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
    paddingVertical: 10,
  },
  container: {
    alignItems: "center",
  },
  cantactContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  namePosition: {
    flex: 1,
    justifyContent: "flex-end",
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
    width: 70,
    height: 70,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default ContactCards;
