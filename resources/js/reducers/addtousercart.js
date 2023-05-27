import { ADD_TO_USER_CART } from "../actions/type";

const initialState = {
    addToUserCart: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TO_USER_CART:
            return { addToUserCart: payload };
        default:
            return state;
    }
}
