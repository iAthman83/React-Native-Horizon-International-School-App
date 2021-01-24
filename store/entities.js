import { combineReducers } from "redux";

// reducers
import eventsReducer from "./reducers/events";
import contactReducer from "./reducers/contactReducer";
import newsReducer from "./reducers/news";

export default combineReducers({
  contacts: contactReducer,
  events: eventsReducer,
  news: newsReducer,
});
