import Hero from "../../../components/Store/hero";
import NavSlaver from "../../../components/nav/Slaver";
import Featured from "../../../components/Store/featured";
import IsSlaver from "../../../services/auth";
import { useNavigate } from "react-router-dom";
const StoreSlaver = () => {
    const navigate = useNavigate();
    if (!IsSlaver) {
        navigate("/LoginSlaver");
    }
    return (
        <>
            <NavSlaver />
            <Hero />
            <Featured />
        </>
    );
};

export default StoreSlaver;
