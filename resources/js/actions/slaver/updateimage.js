import axios from "axios";
import { UPDATE_IMAGE } from "../type";
const url = process.env.MIX_API_URL;

export const updateImage = (id, image) => (dispatch) => {
    const formData = new FormData();
    Array.from(image).forEach((file) => {
        formData.append("image[]", file);
    });

    return axios
        .post(url + `/product/edit-image/${id}`, formData)
        .then((response) => {
            dispatch({
                type: UPDATE_IMAGE,
                payload: true,
            });
            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            dispatch({
                type: UPDATE_IMAGE,
                payload: false,
            });
            return Promise.reject(error);
        });
};
