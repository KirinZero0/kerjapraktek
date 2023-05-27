import axios from "axios";
import { ADD_TO_USER_CART } from "../../type";
import Header from "../../../services/header";
const url = process.env.MIX_API_URL;

export const addToUserCart = (productId) => (dispatch) => {
    return axios
        .post(
            url + `/product/add-to-user-cart/${productId}`,
            {},
            {
                headers: Header(),
            }
        )
        .then((response) => {
            dispatch({
                type: ADD_TO_USER_CART,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
