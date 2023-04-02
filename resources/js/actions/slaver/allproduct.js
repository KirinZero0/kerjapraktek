import axios from "axios";
import { ALL_PRODUCT } from "../type";
const url = process.env.MIX_API_URL;

export const allProduct = () => (dispatch) => {
    return axios
        .get(url + `/product/show`)
        .then((response) => {
            dispatch({
                type: ALL_PRODUCT,
                payload: response.data.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
