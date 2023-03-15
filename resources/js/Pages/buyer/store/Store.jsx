import Hero from "../../../components/Store/hero";
import NavBuyer from "../../../components/nav/Buyer";
import Featured from "../../../components/Store/featured";
import IsBuyer from "../../../services/auth";
import { useNavigate } from "react-router-dom";
const StoreBuyer = () => {
    const navigate = useNavigate();
    if (!IsBuyer) {
        navigate("/LoginBuyer");
    }
    return (
        <>
            <NavBuyer />
            <Hero />
            <Featured />
        </>
    );
};

export default StoreBuyer;
