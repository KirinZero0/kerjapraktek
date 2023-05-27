import axios from "axios";
import { EWALLET_PAY } from "../../type";
import Header from "../../../services/header";
const url = process.env.MIX_API_URL;

export const ewalletTransaction = (channel_code) => (dispatch) => {
    return axios
        .post(
            url + `/transaction/ewallet/${channel_code}`,
            {},
            {
                headers: Header(),
            }
        )
        .then((response) => {
            dispatch({
                type: EWALLET_PAY,
                payload: response.data,
            });

            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
};
