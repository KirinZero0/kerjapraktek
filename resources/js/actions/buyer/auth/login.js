import axios from "axios";
import { IS_LOGGED_IN } from "../../type";

export const Login = (codename, password) => (dispatch) => {
    axios
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
        })
        .catch((error) => {
            console.log(error);
        });
};
