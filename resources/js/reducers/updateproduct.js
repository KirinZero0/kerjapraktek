import { UPDATE_PRODUCT } from "../actions/type";

const initialState = {
    updateProduct: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PRODUCT:
            return { updateProduct: payload };
        default:
            return state;
    }
}
