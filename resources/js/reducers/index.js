import { combineReducers } from "redux";
import message from "./message";
import login from "./login";
import user from "./user";
import addproduct from "./addproduct";
import regis from "./regis";
import generateid from "./generateid";
import getproduct from "./getproduct";
import allproduct from "./allproduct";
import updateproduct from "./updateproduct";
import updateimage from "./updateimage";
import deleteimage from "./deleteimage";
import products from "./products";
import addcart from "./addcart";
import showpubliccart from "./showpubliccart";
import storecart from "./storecart";
import showusercart from "./showusercart";
import ewallettransaction from "./ewallettransaction";
import retailtransaction from "./retailtransaction";
import vatransaction from "./vatransaction";

export default combineReducers({
    message,
    login,
    user,
    addproduct,
    regis,
    generateid,
    getproduct,
    allproduct,
    updateproduct,
    updateimage,
    deleteimage,
    products,
    addcart,
    showpubliccart,
    storecart,
    showusercart,
    ewallettransaction,
    retailtransaction,
    vatransaction,
});
