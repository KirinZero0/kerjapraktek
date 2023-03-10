import { CURRENT_LOGIN } from "../actions/type";

const initialState = {
    currentLogin: "",
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CURRENT_LOGIN:
            return { currentLogin: payload };
        default:
            return state;
    }
}
