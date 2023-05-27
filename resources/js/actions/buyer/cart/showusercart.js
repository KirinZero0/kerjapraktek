import axios from "axios";
import { GET_USER_CART } from "../../type";
import Header from "../../../services/header";
const url = process.env.MIX_API_URL;

export const showUserCart = () => (dispatch) => {
    return axios
        .get(`${url}/product/user-cart`, {
            headers: Header(),
        })
        .then((response) => {
            dispatch({
                type: GET_USER_CART,
                payload: response.data.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
