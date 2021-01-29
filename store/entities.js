import { combineReducers } from "redux";

// reducers
import eventsReducer from "./reducers/events";
// import contactReducer from "./reducers/contactReducer";
import newsReducer from "./reducers/news";
import contactsReducer from "./reducers/contacts";

export default combineReducers({
  // contacts: contactReducer,
  events: eventsReducer,
  news: newsReducer,
  contacts: contactsReducer,
});
