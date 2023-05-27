import axios from "axios";
import { RETAIL_PAY } from "../../type";
import Header from "../../../services/header";
const url = process.env.MIX_API_URL;

export const retailTransaction = (retail_name) => (dispatch) => {
    return axios
        .post(
            url + `/transaction/retail/${retail_name}`,
            {},
            {
                headers: Header(),
            }
        )
        .then((response) => {
            dispatch({
                type: RETAIL_PAY,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
