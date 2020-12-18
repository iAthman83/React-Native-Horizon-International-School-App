import { Platform } from "react-native";
import Colors from "../constants/Colors";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// import all the screens
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import StaffDirectoryScreen from "../screens/StaffDirectoryScreen";
import TimeTableScreen from "../screens/TimeTableScreen";

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
  },
  // set up default styling and header names for the headers, as a second argument
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(AppNavigation);
