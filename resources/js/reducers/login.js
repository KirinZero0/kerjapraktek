import { IS_LOGGED_IN } from "../actions/type";

const initialState = {
    isLogin: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case IS_LOGGED_IN:
            return { isLogin: payload };
        default:
            return state;
    }
}
