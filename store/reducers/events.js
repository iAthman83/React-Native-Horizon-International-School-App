import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// reselect for memoisation
import { createSelector } from "reselect";

// api call acion creators
import { apiCallBegan } from "../apiActions/api";

// moment js for chaching
import moment from "moment";

// let lastId = 0;
// automatically creates action types and
// action creators
const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    // maps actions to action handlers
    eventsRequested: (events, action) => {
      events.loading = true;
    },
    eventsReceived: (events, action) => {
      events.list = action.payload;
      events.loading = false;
      events.lastFetch = Date.now();
    },
    eventsRequestFailed: (events, action) => {
      events.loading = false;
    },

    // command - action
    // addEvent - eventAdded
    eventAdded: (events, action) => {
      events.list.push(action.payload);
    },

    // resolveEvent (command) - eventResolved (event)
  },
});

const {
  eventAdded,
  eventsReceived,
  eventsRequested,
  eventsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action creators for the api
// Only export actions that have a nortion of a command
const url = "/events";
export const loadEvents = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.events;

  const diffMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: eventsRequested.type,
      onSuccess: eventsReceived.type,
      onError: eventsRequestFailed.type,
    })
  );
};
