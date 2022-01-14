import { combineReducers } from "redux";
import phoneReducer from "./phoneReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  phoneReducer,
  userReducer,
});

export default rootReducer;
