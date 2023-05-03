import axios from "axios";
import { STORE_CART } from "../../type";
import Header from "../../../services/header";
const url = process.env.MIX_API_URL;

export const storeCart = () => (dispatch) => {
    return axios
        .post(
            url + `/product/store-cart`,
            {},
            {
                headers: Header(),
            }
        )
        .then((response) => {
            dispatch({
                type: STORE_CART,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
