import { combineReducers } from "redux";

import issues from "./issueReducer";
import activeIssues from "./selectedIssueReducer";

export default combineReducers({
  issues,
  selectedIssues
});
