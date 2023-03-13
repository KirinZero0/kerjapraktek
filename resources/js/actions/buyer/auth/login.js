import axios from "axios";
import { IS_LOGGED_IN } from "../../type";

export const Login = (codename, password) => (dispatch) => {
    return axios
        .post("/api/auth/buyers/login", { codename, password })
        .then((response) => {
            const token = response.data.data.token;
            const guard = response.data.data.guard;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("guard", guard);

            dispatch({
                type: IS_LOGGED_IN,
                payload: true,
            });
            return Promise.resolve();
        })
        .catch((error) => {
            console.log(error);
            return Promise.reject();
        });
};
