import { EWALLET_PAY } from "../actions/type";

const initialState = {
    ewalletPay: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case EWALLET_PAY:
            return { ewalletPay: payload };
        default:
            return state;
    }
}