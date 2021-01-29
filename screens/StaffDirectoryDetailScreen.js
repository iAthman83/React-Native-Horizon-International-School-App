import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Linking,
  Platform,
  Alert,
} from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import QuickContactAccess from "../components/QuickContactAccess";

import Colors from "../constants/Colors";

const ContactDetailScreen = (props) => {
  // pick the id from the navigation params
  const contactId = props.navigation.getParam("contactId");

  // retrieve all contact array from redux

  const contactsRedux = useSelector((state) => state.entities.contacts.list);

  // find the contact that matches with the id from navigation
  const singleContact = contactsRedux.find(
    (contact) => contact.id === contactId
  );
  // const singleContact = contactsFromRedux.find(
  //   (contact) => contact.id === contactId
  // );

  // call when press number
  const call = () => {
    let phone_number = singleContact.phone_number;

    if (Platform.OS === "android") {
      phone_number = `tel:${singleContact.phone_number}`;
    } else {
      phone_number = `telprompt:${singleContact.phone_number}`;
    }

    Linking.canOpenURL(phone_number)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Number not Available");
        } else {
          return Linking.openURL(phone_number);
        }
      })
      .catch((err) => console.log(err));
  };
  // send message when press number
  const message = () => {
    let phone_number = singleContact.phone_number;

    if (phone_number) {
      phone_number = `sms:${singleContact.phone_number}`;
    } else {
      Alert.alert("Something went wrong, try again");
    }

    Linking.canOpenURL(phone_number)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Number not Available");
        } else {
          return Linking.openURL(phone_number);
        }
      })
      .catch((err) => console.log(err));
  };
  // send mail when press number
  const mail = () => {
    let emailAddress = singleContact.email;

    if (emailAddress) {
      emailAddress = `mailto:${singleContact.email}`;
    } else {
      Alert.alert("Something went wrong, try again");
    }

    Linking.canOpenURL(emailAddress)
      .then((supported) => {
        if (!supported) {
          Alert.alert("Number not Available");
        } else {
          return Linking.openURL(emailAddress);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={{ uri: singleContact.profile_photo[0].url }}
          style={{ width: 80, height: 80 }}
        />
        <View style={styles.names}>
          <Text style={styles.nameText}>{singleContact.salutation}</Text>
          <Text style={styles.nameText}>{singleContact.first_name}</Text>
          <Text style={styles.nameText}>{singleContact.last_name}</Text>
        </View>
        <View>
          {/* <Text style={styles.nameText}>{singleContact.position}</Text> */}
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <QuickContactAccess
            action="Call"
            iconName="ios-call"
            onPress={call}
          />
          <QuickContactAccess
            action="Message"
            iconName="ios-text"
            onPress={message}
          />
          <QuickContactAccess
            action="Email"
            iconName="ios-mail"
            onPress={mail}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollviewContactDetails}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingVertical: 8,
          }}
        >
          <Text>Mobile</Text>
          <Text onPress={call} style={{ color: Colors.primary }}>
            {singleContact.phone_number}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingVertical: 8,
          }}
        >
          <Text>Email</Text>
          <Text onPress={mail} style={{ color: Colors.primary }}>
            {singleContact.email}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingVertical: 8,
          }}
        >
          <Text onPress={message} style={{ color: Colors.primary }}>
            Send Message
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            paddingVertical: 8,
          }}
        >
          <Text onPress={() => {}} style={{ color: Colors.primary }}>
            Add To Favorites
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

ContactDetailScreen.navigationOptions = {
  headerTitle: "Contact Details",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: Dimensions.get("window").height / 3,
    justifyContent: "center",
    alignItems: "center",
  },
  names: {
    marginVertical: 15,
    flexDirection: "row",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  quickAccess: {
    flexDirection: "row",
  },
  scrollviewContactDetails: {
    backgroundColor: "white",
    padding: 20,
  },
});

export default ContactDetailScreen;
