import { combineReducers } from "redux";
import userReducer from "./slices/user";
import counterReducer from "./slices/counter";

export default combineReducers({
  user: userReducer,
  counter: counterReducer,
});
