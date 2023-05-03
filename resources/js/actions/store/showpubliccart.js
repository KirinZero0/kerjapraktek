import axios from "axios";
import { GET_PUBLIC_CART } from "../type";
const url = process.env.MIX_API_URL;

export const showPublicCart = () => (dispatch) => {
    return axios
        .get(`${url}/product/public-cart`)
        .then((response) => {
            dispatch({
                type: GET_PUBLIC_CART,
                payload: response.data.data
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
