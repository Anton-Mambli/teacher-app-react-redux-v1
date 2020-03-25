import { combineReducers } from "redux";
import { gradeReducer } from "./gradeReducer";

export const rootReducer = combineReducers({
  grades: gradeReducer
});
