import { UPDATE_IMAGE } from "../actions/type";

const initialState = {
    updateImage: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_IMAGE:
            return { updateImage: payload };
        default:
            return state;
    }
}
