import React from "react";
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./Card";

const GridItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect}>
      <Card style={styles.card}>
        <View style={styles.itemContainer}>
          <View
            style={{
              ...styles.imageContainer,
              ...{ borderColor: props.color },
            }}
          >
            <View style={styles.image}>
              <MaterialCommunityIcons
                name={props.iconName}
                size={70}
                color={props.color}
              />
            </View>
          </View>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Card>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  itemContainer: {
    width: Dimensions.get("window").width / 2.25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default GridItem;
