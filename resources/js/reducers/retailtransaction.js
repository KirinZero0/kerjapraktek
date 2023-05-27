import { RETAIL_PAY } from "../actions/type";

const initialState = {
    retailPay: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case RETAIL_PAY:
            return { retailPay: payload };
        default:
            return state;
    }
}