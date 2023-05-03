import axios from "axios";
import { ADD_CART } from "../type";
const url = process.env.MIX_API_URL;

export const addCart = (customId) => (dispatch) => {
    return axios
        .post(url + `/product/add-to-cart/${customId}`)
        .then((response) => {
            dispatch({
                type: ADD_CART,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
