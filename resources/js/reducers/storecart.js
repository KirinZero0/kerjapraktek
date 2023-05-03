import { STORE_CART } from "../actions/type";

const initialState = {
    storeCart: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case STORE_CART:
            return { storeCart: payload };
        default:
            return state;
    }
}
