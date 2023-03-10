import axios from "axios";
import { CURRENT_LOGIN } from "./type";
import Header from "../services/header";

export const getUser = () => (dispatch) => {
    axios
        .get("/api/user", {
            headers: Header(),
        })
        .then((response) => {
            dispatch({
                type: CURRENT_LOGIN,
                payload: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
