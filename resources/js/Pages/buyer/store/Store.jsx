import React, { useEffect } from "react";
import Hero from "../../../components/Store/hero";
import NavBuyer from "../../../components/nav/Buyer";
import Featured from "../../../components/Store/Featured";
import IsBuyer from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Products from "../../../components/Store/Products";
import { storeCart } from "../../../actions/buyer/cart/storecart";

const StoreBuyer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (IsBuyer) {
            dispatch(storeCart())
                .then(() => console.log("Cart stored successfully"))
                .catch((error) => console.log(error));
        } else {
            navigate("/LoginBuyer");
        }
    }, []);
    return (
        <>
            <NavBuyer />
            <Hero />
            <Products />
        </>
    );
};

export default StoreBuyer;
