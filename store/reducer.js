import { combineReducers } from "redux";

// reducer entities
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
});
