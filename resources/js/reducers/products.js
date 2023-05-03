import { PRODUCTS } from "../actions/type";

const initialState = {
    data: [],
    pagination: {
        current_page: 1,
        last_page: null,
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS:
            return {
                ...state,
                data: action.payload,
                pagination: {
                    current_page: action.payload2.current_page,
                    last_page: action.payload2.last_page,
                },
            };
        default:
            return state;
    }
}
