import { ADD_CART } from "../actions/type";

const initialState = {
    addCart: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_CART:
            return { addCart: payload };
        default:
            return state;
    }
}
