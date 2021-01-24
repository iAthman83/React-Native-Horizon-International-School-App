import { createSlice } from "@reduxjs/toolkit";

// api call acion creators
import { apiCallBegan } from "../apiActions/api";

// moment js for chaching
import moment from "moment";

const slice = createSlice({
  name: "news",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    // maps actions to action handlers
    newsRequested: (events, action) => {
      events.loading = true;
    },
    newsReceived: (events, action) => {
      events.list = action.payload;
      events.loading = false;
      events.lastFetch = Date.now();
    },
    newsRequestFailed: (events, action) => {
      events.loading = false;
    },

    // command - action
    // addEvent - eventAdded
    newAdded: (events, action) => {
      events.list.push(action.payload);
    },
  },
});

const {
  newAdded,
  newsReceived,
  newsRequestFailed,
  newsRequested,
} = slice.actions;

export default slice.reducer;

// Action creators for the api
// Only export actions that have a nortion of a command
const url = "/news";
export const loadNews = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.news;

  const diffMinutes = moment().diff(moment(lastFetch), "minutes");

  if (diffMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: newsRequested.type,
      onSuccess: newsReceived.type,
      onError: newsRequestFailed.type,
    })
  );
};
