import axios from "axios";
import { DELETE_IMAGE } from "../type";
const url = process.env.MIX_API_URL;

export const deleteImage = (id) => (dispatch) => {
    return axios
        .delete(url + `/product/delete-image/${id}`)
        .then((response) => {
            dispatch({
                type: DELETE_IMAGE,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
