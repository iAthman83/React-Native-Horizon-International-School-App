import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

// import components
import GridItem from "../components/GridItem";

// import data
import { GRIDITEMS } from "../data/GridItemData";

const HomeScreen = (props) => {
  // Render the flat list single item in the grid
  const renderGridItem = (itemData) => {
    return (
      <GridItem
        title={itemData.item.title}
        color={itemData.item.color}
        iconName={itemData.item.iconName}
        onSelect={() => {
          console.log("selected");
        }}
      />
    );
  };
  return (
    <FlatList
      data={GRIDITEMS}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Horizon International School",
  headerStyle: {
    height: 80,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
  child: {
    width: window.width / 2,
  },
});

export default HomeScreen;
