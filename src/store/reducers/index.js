import { combineReducers } from "redux";
import posts from "./postReducer";
import counter from "./counterReducer";

export default combineReducers({
  posts,
  counter,
});
