import axios from "axios";
import { GET_PRODUCT } from "../type";
const url = process.env.MIX_API_URL;

export const getProduct = (custom_id) => (dispatch) => {
    return axios
        .get(url + `/product/show/${custom_id}`)
        .then((response) => {
            dispatch({
                type: GET_PRODUCT,
                payload: response.data.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
