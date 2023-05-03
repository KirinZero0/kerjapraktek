import Hero from "../../../components/Store/hero";
import NavSlaver from "../../../components/nav/Slaver";
import Featured from "../../../components/Store/Featured";
import IsSlaver from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import Products from "../../../components/Store/Products";
import TestCart from "../../../components/Store/Cart";
const Cart = () => {
    const navigate = useNavigate();
    if (!IsSlaver) {
        navigate("/LoginSlaver");
    }
    return (
        <>
            <NavSlaver />
            <TestCart/>
        </>
    );
};

export default Cart;
