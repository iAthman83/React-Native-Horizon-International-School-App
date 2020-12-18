import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// import use selector for redux
import { useSelector } from "react-redux";

// import components to use
import GridItem from "../components/GridItem";

const StaffDirectoryScreen = (props) => {
  // extract data from redux contact slice
  const contacts = useSelector((state) => state.contacts.contacts);

  // function to handle data to the flat list
  const renderItem = (itemData) => {
    return (
      <GridItem
        title={itemData.item.firstName}
        color="dodgerblue"
        iconName="image"
        onPress={() => {
          console.log("selected");
        }}
      />
    );
  };
  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

StaffDirectoryScreen.navigationOptions = {
  headerTitle: "Staff Directory",
};

const styles = StyleSheet.create({});

export default StaffDirectoryScreen;
