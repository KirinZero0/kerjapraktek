import { ADD_PRODUCT } from "../actions/type";

const initialState = {
    addProduct: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT:
            return { addProduct: payload };
        default:
            return state;
    }
}
