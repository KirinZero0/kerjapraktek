import { combineReducers } from "redux";
import message from "./message";
import login from "./login";
import user from "./user";
import addproduct from "./addproduct";
import regis from "./regis";
import generateid from "./generateid";

export default combineReducers({
    message,
    login,
    user,
    addproduct,
    regis,
    generateid,
});
