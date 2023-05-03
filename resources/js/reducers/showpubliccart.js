import { GET_PUBLIC_CART } from "../actions/type";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PUBLIC_CART:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}
