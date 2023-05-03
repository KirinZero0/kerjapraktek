import axios from "axios";
import { PRODUCTS } from "../type";
const url = process.env.MIX_API_URL;

export const allStoreProduct = (page) => (dispatch) => {
    console.log(page);
    return axios
        .get(`${url}/product/show/page/?page=${page}`)
        .then((response) => {
            dispatch({
                type: PRODUCTS,
                payload: response.data.data.data,
                payload2: response.data.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
