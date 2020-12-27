import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

const ContactDetailScreen = (props) => {
  return (
    <View>
      <Text>Contact Details Screen</Text>
    </View>
  );
};

ContactDetailScreen.navigationOptions = {
  headerTitle: "Contact Details",
};

const styles = StyleSheet.create({});

export default ContactDetailScreen;
