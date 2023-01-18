const initialStateHome = {
    datablog: [],
}

const homeReducer = (state = initialStateHome, action) => {
    if (action.type === "UPDATE_DATA_BLOG") {
      return {
        ...state,
        datablog: action.payload
      };
    }

    return state;
}

export default homeReducer