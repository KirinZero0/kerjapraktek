import Hero from "../../../components/Store/hero";
import NavSlaver from "../../../components/nav/Slaver";
import Featured from "../../../components/Store/Featured";
import IsSlaver from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import Products from "../../../components/Store/Products";
const StoreSlaver = () => {
    const navigate = useNavigate();
    if (!IsSlaver) {
        navigate("/LoginSlaver");
    }
    return (
        <>
            <NavSlaver />
            <Hero />
            {/* <Featured /> */}
            <Products />
        </>
    );
};

export default StoreSlaver;
