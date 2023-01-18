const initialState = {
  name: "Taufik"
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Fauzi"
    };
  }
  return state;
};

export default globalReducer;