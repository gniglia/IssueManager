import { combineReducers } from "redux";

import issues from "./issueReducer";
import filter from "./filterReducer";

export default combineReducers({
  issues,
  filter
});
