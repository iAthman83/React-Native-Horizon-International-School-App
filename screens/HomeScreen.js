import React from "react";
import { StyleSheet, FlatList } from "react-native";

// import components
import GridItem from "../components/GridItem";

// import data
import { GRIDITEMS } from "../data/GridItemData";

const HomeScreen = (props) => {
  // function to map navigation screens
  const mapNavigation = (id) => {
    switch (id) {
      case "c65252":
        props.navigation.navigate("TimeTable");
        break;
      case "632fc2":
        console.log("News");
        break;
      case "453252":
        console.log("Gallery");
        break;
      case "b22b2a":
        props.navigation.navigate("Calendar");
        break;
      case "cf6742":
        console.log("Events");
        break;
      case "464d69":
        props.navigation.navigate("StaffDirectory");
        break;
      case "7a3b6a":
        console.log("Competition Results");
        break;
      case "ce8737":
        console.log("Contact Us");
        break;
      default:
        props.navigation.navigate("Home");
        break;
    }
  };
  // Render the flat list single item in the grid
  const renderGridItem = (itemData) => {
    return (
      <GridItem
        title={itemData.item.title}
        color={itemData.item.color}
        iconName={itemData.item.iconName}
        onPress={() => {
          // props.navigation.navigate("Calendar");
          mapNavigation(itemData.item.id);
        }}
      />
    );
  };
  return (
    <FlatList
      data={GRIDITEMS}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Horizon International School",
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
