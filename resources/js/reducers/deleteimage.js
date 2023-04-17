import { DELETE_IMAGE } from "../actions/type";

const initialState = {
    deleteImage: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case DELETE_IMAGE:
            return { deleteImage: payload };
        default:
            return state;
    }
}
