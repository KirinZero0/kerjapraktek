import axios from "axios";
import { GENERATE_PRODUCT_ID } from "../type";

export const generateProductId = () => (dispatch) => {
    return axios
        .get("http://127.0.0.1:8000/api/product/generate-id")
        .then((response) => {
            dispatch({
                type: GENERATE_PRODUCT_ID,
                payload: response.data.data.id,
            });
            // console.log(response.data);
            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
