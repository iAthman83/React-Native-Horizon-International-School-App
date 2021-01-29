import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import HeaderText from "../components/HeaderText";
import DetailText from "../components/DetailText";

const EventsDetailScreen = (props) => {
  // get id from props
  const eventId = props.navigation.getParam("eventId");

  // select all events from the state
  const eventRedux = useSelector((state) => state.entities.events.list);

  // pick event matching id pressed
  const singleEvent = eventRedux.find((event) => event.id === eventId);

  //
  return (
    <View style={styles.container}>
      <HeaderText title={singleEvent.title} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: singleEvent.image[0].url }}
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <DetailText details={singleEvent.content} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingLeft: 15,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: Dimensions.get("window").width / 1.7,
    height: Dimensions.get("window").width / 1.7,
  },
});

export default EventsDetailScreen;
