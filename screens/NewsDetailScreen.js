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

const NewsDetailScreen = (props) => {
  // get id from props
  const newsId = props.navigation.getParam("newsId");

  // select all events from the state
  const newsRedux = useSelector((state) => state.entities.news.list);

  // pick event matching id pressed
  const singleNews = newsRedux.find((event) => event.id === newsId);

  //
  return (
    <View style={styles.container}>
      <HeaderText title={singleNews.title} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: singleNews.media[0].url }} style={styles.image} />
      </View>
      <ScrollView style={styles.scrollView}>
        <DetailText details={singleNews.content} />
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

export default NewsDetailScreen;
