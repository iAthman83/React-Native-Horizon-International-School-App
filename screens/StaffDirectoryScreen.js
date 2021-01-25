import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// import use selector for redux
import { useSelector } from "react-redux";

// import components to use
import ContactCard from "../components/ContactCards";
import HeaderText from "../components/HeaderText";

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
    <View style={styles.container}>
      <HeaderText title="Staff Contacts" />
      <FlatList
        data={contactsRedux.contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

StaffDirectoryScreen.navigationOptions = {
  headerTitle: "Staff Directory",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StaffDirectoryScreen;
