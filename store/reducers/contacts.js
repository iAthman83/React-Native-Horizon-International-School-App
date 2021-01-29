import { createSlice } from "@reduxjs/toolkit";

// reselect for memoisation
import { createSelector } from "reselect";

// api call acion creators
import { apiCallBegan } from "../apiActions/api";

// moment js for chaching
import moment from "moment";

const slice = createSlice({
  name: "contacts",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    // maps actions to action handlers
    contactsRequested: (contacts, action) => {
      contacts.loading = true;
    },
    contactsReceived: (contacts, action) => {
      contacts.list = action.payload;
      contacts.loading = false;
      contacts.lastFetch = Date.now();
    },
    contactsRequestFailed: (contacts, action) => {
      contacts.loading = false;
    },

    // command - action
    // addEvent - eventAdded
    contactAdded: (contacts, action) => {
      contacts.list.push(action.payload);
    },

    // resolveEvent (command) - eventResolved (event)
  },
});

const {
  contactAdded,
  contactsReceived,
  contactsRequestFailed,
  contactsRequested,
} = slice.actions;
export default slice.reducer;

// Action creators for the api
// Only export actions that have a nortion of a command
const url = "/contacts";
export const loadContacts = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.contacts;

  const diffMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: contactsRequested.type,
      onSuccess: contactsReceived.type,
      onError: contactsRequestFailed.type,
    })
  );
};
