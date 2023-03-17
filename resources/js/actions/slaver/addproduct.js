import axios from "axios";
import { ADD_PRODUCT } from "../type";
const url = process.env.MIX_API_URL;

export const addProduct =
    (custom_id, name, description, race, price, image) => (dispatch) => {
        const formData = new FormData();
        formData.append("custom_id", custom_id);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("race", race);
        formData.append("price", price);
        console.log(image);
        Array.from(image).forEach((file) => {
            formData.append("image[]", file);
        });

        return axios
            .post(url + "/product/register", formData)
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
