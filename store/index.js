import { combineReducers, createStore } from "redux";
import { formReducer } from "./formReducer";

const rootReducer = combineReducers({
  formReducer,
});

export const store = createStore(rootReducer);
