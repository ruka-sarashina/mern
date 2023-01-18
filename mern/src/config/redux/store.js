import { applyMiddleware, combineReducers, createStore } from "redux";
import reducer from "./reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
