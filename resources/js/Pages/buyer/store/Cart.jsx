import NavBuyer from "../../../components/nav/Buyer";
import IsBuyer from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import UserCart from "../../../components/Store/buyer/transactions/Cart";
const BuyerCart = () => {
    const navigate = useNavigate();
    if (!IsBuyer) {
        navigate("/LoginBuyer");
    }
    return (
        <>
            <NavBuyer />
            <UserCart />
        </>
    );
};

export default BuyerCart;
