import axios from "axios";
import { IS_REGISTERED } from "../../type";

export const Regis = (codename, name, password) => (dispatch) => {
    return axios
        .post("api/auth/buyers/register", { codename, name, password })
        .then((response) => {
            dispatch({
                type: IS_REGISTERED,
                payload: true,
            });
            return Promise.resolve();
        })
        .catch((error) => {
            console.error(error);
            dispatch({
                type: IS_REGISTERED,
                payload: false,
            });
            return Promise.reject(error);
        });
};
