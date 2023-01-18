import { createStore } from 'redux';

const initialState = {
    datablog: [],
    name: "Taufik"
}

const reducer = (state = initialState, action) => {

    return state
}
const store = createStore(reducer);

export default store;
