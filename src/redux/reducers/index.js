import { combineReducers } from "redux";
import getComments from "./getComments";
import addComments from "./addComment";
import updateComments from "./updateComments";
import deleteComments from "./deleteComments";

export default combineReducers({
  getComments,
  addComments,
  updateComments,
  deleteComments
});
