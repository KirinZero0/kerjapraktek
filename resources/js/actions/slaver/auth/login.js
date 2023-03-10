import axios from "axios";
import header from "../../../services/header";
import { IS_LOGGED_IN } from "../../type";

export const Login = (codename, password) => (dispatch) => {
    axios
        .post("/api/auth/slavers/login", { codename, password })
        .then((response) => {
            const token = response.data.data.token;
            sessionStorage.setItem("token", token);

            dispatch({
                type: IS_LOGGED_IN,
                payload: true,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
