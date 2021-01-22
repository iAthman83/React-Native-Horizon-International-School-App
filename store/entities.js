import { combineReducers } from "redux";

// reducers
import eventsReducer from "./reducers/events";
import contactReducer from "./reducers/contactReducer";

export default combineReducers({
  contacts: contactReducer,
  events: eventsReducer,
});
