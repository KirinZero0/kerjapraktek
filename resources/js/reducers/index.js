import { combineReducers } from "redux";
import message from "./message";
import login from "./login";
import user from "./user";

export default combineReducers({
    message,
    login,
    user,
});
