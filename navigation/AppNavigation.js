import React from "react";
import { Platform, Text } from "react-native";
import Colors from "../constants/Colors";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import icons
import { Ionicons } from "@expo/vector-icons";

// import all the screens
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import StaffDirectoryScreen from "../screens/StaffDirectoryScreen";
import TimeTableScreen from "../screens/TimeTableScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import FavoriteContactScreen from "../screens/FavoriteContactScreen";
import NewsScreen from "../screens/NewsScreen";
import EventsScreen from "../screens/EventsScreen";

// default stack navigation options
const defaultstackNavOptions = {
  // set up default styling and header names for the headers, as a second argument
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const AppNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Calendar: {
      screen: CalendarScreen,
    },
    StaffDirectory: {
      screen: StaffDirectoryScreen,
    },
    TimeTable: {
      screen: TimeTableScreen,
    },
    ContactDetails: {
      screen: ContactDetailScreen,
    },
    NewsScreen: {
      screen: NewsScreen,
    },
    Events: {
      screen: EventsScreen,
    },
  },
  // set up default styling and header names for the headers, as a second argument
  {
    defaultNavigationOptions: defaultstackNavOptions,
  }
);

// Favorite contact navigator
const FavNavigator = createStackNavigator(
  {
    Favorite: {
      screen: FavoriteContactScreen,
    },
    ContactDetails: {
      screen: ContactDetailScreen,
    },
  },
  // set up default styling and header names for the headers, as a second argument
  {
    defaultNavigationOptions: defaultstackNavOptions,
  }
);

// configutation for the bottom tabs
const tabScreenConfig = {
  Home: {
    screen: AppNavigation,
    navigationOptions: {
      tabBarLabel: Platform.OS === "android" ? <Text>Home</Text> : "Home",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
      tabBarLabel: Platform.OS === "android" ? <Text>Home</Text> : "Home",
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? <Text>Favorites</Text> : "Favorites",
    },
  },
};

// bottom tab navigator tabs
const ContactFavNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {},
          activeTintColor: Colors.primary,
        },
      });

export default createAppContainer(ContactFavNavigator);
