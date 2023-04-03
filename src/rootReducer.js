import { combineReducers } from "redux";
import { loginReducer } from "./components/homepage/reducer";

export const rootReducer = combineReducers({
  loginReducer,
});
