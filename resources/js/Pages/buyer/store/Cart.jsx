import NavBuyer from "../../../components/nav/Buyer";
import IsBuyer from "../../../services/auth";
import ShoppingCart from "../../../components/Store/buyer/transactions/Cart";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const navigate = useNavigate();
    if (!IsBuyer) {
        navigate("/LoginBuyer");
    }
    return (
        <>
            <NavBuyer />
            <ShoppingCart />
        </>
    );
};

export default Cart;
