import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loadEvents } from "../store/reducers/events";

// components
import FlatListHorizontalLayout from "../components/FlatListHorizontalLayout";
import HeaderText from "../components/HeaderText";
import LoadingIndicator from "../components/LoadingIndicator";

const EventsScreen = (props) => {
  const dispatch = useDispatch();

  // select the events slice from redux
  const events = useSelector((state) => state.entities.events.list);

  // get loading from state
  const loading = useSelector((state) => state.entities.events.loading);

  useEffect(() => {
    dispatch(loadEvents());
  }, []);

  // render item
  const renderItem = (itemData) => {
    // const pickPhoto = itemData.item.media((url) => url);
    return (
      <FlatListHorizontalLayout
        image={itemData.item.image[0].url}
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

  if (loading) {
    return (
      <View style={styles.container}>
        <HeaderText title="Horizon Events" />
        <LoadingIndicator />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <HeaderText title="Horizon Events" />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={events}
          renderItem={renderItem}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EventsScreen;
