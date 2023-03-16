import axios from "axios";
import { ADD_PRODUCT } from "../type";

export const addProduct =
    (custom_id, name, description, race, price, image) => (dispatch) => {
        return axios
            .post("http://127.0.0.1:8000/api/product/register", {
                custom_id,
                name,
                description,
                race,
                price,
                image,
            })
            .then((response) => {
                dispatch({
                    type: ADD_PRODUCT,
                    payload: true,
                });
                return Promise.resolve();
            })
            .catch((error) => {
                console.error(error);
                dispatch({
                    type: ADD_PRODUCT,
                    payload: false,
                });
                return Promise.reject(error);
            });
    };
