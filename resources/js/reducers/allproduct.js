import { ALL_PRODUCT } from "../actions/type";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ALL_PRODUCT:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}
