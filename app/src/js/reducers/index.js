import { combineReducers } from "redux";

import cards from "./cardReducer";
import activeCard from "./activeCardReducer";
import filter from "./filterReducer";
import modal from "./modalReducer";

export default combineReducers({
  cards,
  activeCard,
  filter,
  modal
});
