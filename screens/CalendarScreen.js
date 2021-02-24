import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// react native calendars
import { Agenda } from "react-native-calendars";
import { Avatar, Card } from "react-native-paper";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const CalendarScreen = () => {
  // calendar items state
  const [items, setItems] = useState({});

  // loaditems method
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = 0; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          // const numItems = Math.floor(Math.random() * 2 + 1);
          const numItems = 0;
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  // Render day
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          flex: 1,
          borderRadius: 5,
          padding: 10,
          marginRight: 10,
          marginTop: 17,
        }}
      >
        <Card.Content>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{item.name}</Text>
            <Avatar.Text label="A" />
          </View>
        </Card.Content>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This date is empty!</Text>
      </View>
    );
  };
  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };
  return (
    <View style={styles.container}>
      <Agenda
        // testID={testIDs.agenda.CONTAINER}
        items={items}
        // loadItemsForMonth={loadItems}
        selected={Date()}
        renderItem={renderItem}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // minDate={"2020-08-01"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // maxDate={"2021-12-31"}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={3}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        // markingType={"period"}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{ calendarBackground: "red", agendaKnobColor: "green" }}
        // renderDay={(day, item) => <Text>{day ? day.day : "item"}</Text>}
        // hideExtraDays={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarItemContainer: {
    marginRight: 10,
    marginTop: 17,
  },
  calendarItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CalendarScreen;
