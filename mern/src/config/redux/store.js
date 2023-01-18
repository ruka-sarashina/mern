import { createStore } from "redux";

const initialState = {
  datablogs: [],
  name: "Taufik"
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      datablogs: action.payload
    };
  }
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Fauzi"
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
