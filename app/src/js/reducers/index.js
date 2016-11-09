import { combineReducers } from "redux";

import cards from "./cardReducer";
import filter from "./filterReducer";

export default combineReducers({
  cards,
  filter
});
