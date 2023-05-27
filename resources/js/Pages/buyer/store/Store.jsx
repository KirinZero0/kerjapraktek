import React, { useEffect } from "react";
import Hero from "../../../components/Store/hero";
import NavBuyer from "../../../components/nav/Buyer";
import Featured from "../../../components/Store/Featured";
import IsBuyer from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Products from "../../../components/Store/Products";
import { storeCart } from "../../../actions/buyer/cart/storecart";
import BuyerProducts from "../../../components/Store/buyer/BuyerProducts";

const StoreBuyer = () => {
    const navigate = useNavigate();

    if (!IsBuyer) {
        navigate("/LoginBuyer");
    }

    return (
        <>
            <NavBuyer />
            <Hero />
            <BuyerProducts />
        </>
    );
};

export default StoreBuyer;
