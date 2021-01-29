import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// import use selector for redux
import { useSelector, useDispatch } from "react-redux";

// redux actions
import { loadContacts } from "../store/reducers/contacts";

// import components to use
import ContactCard from "../components/ContactCards";
import HeaderText from "../components/HeaderText";
import LoadingIndicator from "../components/LoadingIndicator";

const StaffDirectoryScreen = (props) => {
  const dispatch = useDispatch();
  // useEffect to load list of news item
  useEffect(() => {
    dispatch(loadContacts());
  }, []);
  // extract data from redux contact slice
  // const contacts = useSelector((state) => state.contacts.contacts);

  //
  const contactsRedux = useSelector((state) => state.entities.contacts.list);

  // get loading from state
  const loading = useSelector((state) => state.entities.contacts.loading);

  // function to handle data to the flat list
  const renderItem = (itemData) => {
    return (
      <ContactCard
        salutation={itemData.item.salutation}
        lastName={itemData.item.last_name}
        position={itemData.item.position}
        imageUrl={itemData.item.profile_photo[0].url}
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

  if (loading) {
    return (
      <View style={styles.container}>
        <HeaderText title="Staff Contacts" />
        <LoadingIndicator />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <HeaderText title="Staff Contacts" />
        <FlatList
          data={contactsRedux}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
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
