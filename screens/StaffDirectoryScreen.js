import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// import use selector for redux
import { useSelector } from "react-redux";

// import components to use
import ContactCard from "../components/ContactCards";

const StaffDirectoryScreen = (props) => {
  // extract data from redux contact slice
  // const contacts = useSelector((state) => state.contacts.contacts);

  //
  const contactsRedux = useSelector((state) => state.entities.contacts);

  // function to handle data to the flat list
  const renderItem = (itemData) => {
    return (
      <ContactCard
        salutation={itemData.item.salutation}
        lastName={itemData.item.lastName}
        position={itemData.item.position}
        imageUrl={itemData.item.imageUrl}
        onPress={() => {
          props.navigation.navigate({
            routeName: "ContactDetails",
            params: {
              contactId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      data={contactsRedux.contacts}
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
