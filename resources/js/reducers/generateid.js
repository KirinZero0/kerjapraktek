import { GENERATE_PRODUCT_ID } from "../actions/type";

const initialState = {
    customid: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GENERATE_PRODUCT_ID:
            return {
                ...state,
                customid: action.payload,
            };
        default:
            return state;
    }
}
