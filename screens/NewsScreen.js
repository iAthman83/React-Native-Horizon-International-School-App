import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux actions
import { loadNews } from "../store/reducers/news";

// components
import FlatListHorizontalLayout from "../components/FlatListHorizontalLayout";
import HeaderText from "../components/HeaderText";

const NewsScreen = (props) => {
  const dispatch = useDispatch();
  // select the events slice from redux
  const news = useSelector((state) => state.entities.news.list);

  // useEffect to load list of news item
  useEffect(() => {
    dispatch(loadNews());
  }, []);

  // render items for flat list from component
  const renderItem = (itemData) => {
    return (
      <FlatListHorizontalLayout
        image={itemData.item.media[0].url}
        title={itemData.item.title}
        onPress={() => {
          props.navigation.navigate({
            routeName: "EventsDetail",
            params: {
              eventId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  //
  return (
    <View style={styles.screen}>
      <HeaderText title="Horizon Updates" />
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

NewsScreen.navigationOptions = {
  headerTitle: "News Updates",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default NewsScreen;
