import { combineReducers } from "redux";

import cards from "./cardReducer";
import filter from "./filterReducer";
import modal from "./modalReducer";

export default combineReducers({
  cards,
  filter,
  modal
});
