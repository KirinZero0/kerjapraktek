import { VA_PAY } from "../actions/type";

const initialState = {
    vaPay: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case VA_PAY:
            return { vaPay: payload };
        default:
            return state;
    }
}