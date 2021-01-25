import { createStore, combineReducers, applyMiddleware } from "redux";
import ageReducer from "../Reducer/reducer";
import reduxLoger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const combinedReducer = combineReducers({ ageReducer });

const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(reduxLoger, thunk))
);

export default store;
