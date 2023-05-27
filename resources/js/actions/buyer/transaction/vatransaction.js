import axios from "axios";
import { VA_PAY } from "../../type";
import Header from "../../../services/header";
const url = process.env.MIX_API_URL;

export const vaTransaction = (bank_code) => (dispatch) => {
    return axios
        .post(
            url + `/transaction/virtual-account/${bank_code}`,
            {},
            {
                headers: Header(),
            }
        )
        .then((response) => {
            dispatch({
                type: VA_PAY,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
