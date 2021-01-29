import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// redux
import { useDispatch, useSelector } from "react-redux";

// redux actions
import { loadNews } from "../store/reducers/news";

// components
import FlatListHorizontalLayout from "../components/FlatListHorizontalLayout";
import HeaderText from "../components/HeaderText";
import LoadingIndicator from "../components/LoadingIndicator";

const NewsScreen = (props) => {
  const dispatch = useDispatch();
  // select the events slice from redux
  const news = useSelector((state) => state.entities.news.list);

  // get loading from state
  const loading = useSelector((state) => state.entities.news.loading);

  // useEffect to load list of news item
  useEffect(() => {
    dispatch(loadNews());
  }, []);

  // render items for flat list from component
  const renderItem = (itemData) => {
    return (
      <FlatListHorizontalLayout
        image={itemData.item.image[0].url}
        title={itemData.item.title}
        onPress={() => {
          props.navigation.navigate({
            routeName: "NewsDetail",
            params: {
              newsId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  //
  if (loading) {
    return (
      <View style={styles.screen}>
        <HeaderText title="Horizon Updates" />
        <LoadingIndicator />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <HeaderText title="Horizon Updates" />
        <FlatList
          data={news}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    );
  }
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
