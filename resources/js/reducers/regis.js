import { IS_REGISTERED } from "../actions/type";

const initialState = {
    isRegis: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case IS_REGISTERED:
            return { isRegis: payload };
        default:
            return state;
    }
}
