import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

// redux
import { useSelector, useDispatch } from "react-redux";
import { loadEvents } from "../store/reducers/events";

// components
import FlatListHorizontalLayout from "../components/FlatListHorizontalLayout";
import HeaderText from "../components/HeaderText";

const EventsScreen = (props) => {
  const dispatch = useDispatch();

  // select the events slice from redux
  const events = useSelector((state) => state.entities.events.list);

  useEffect(() => {
    dispatch(loadEvents());
  }, []);
  // render item
  const renderItem = (itemData) => {
    // const pickPhoto = itemData.item.media((url) => url);
    return (
      <FlatListHorizontalLayout
        image={itemData.item.media[0].url}
        title={itemData.item.title}
      />
    );
  };

  console.log(events);

  return (
    <View style={styles.container}>
      <HeaderText title="Horizon Events" />
      <FlatList
        keyExtractor={(item) => item.id}
        data={events}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EventsScreen;
