import { GET_USER_CART } from "../actions/type";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER_CART:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}
