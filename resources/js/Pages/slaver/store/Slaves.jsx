import NavSlaver from "../../../components/nav/Slaver";
import IsSlaver from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import SlaveTable from "../../../components/Store/slaver/slaves/tables";
const SlavePage = () => {
    const navigate = useNavigate();
    if (!IsSlaver) {
        navigate("/LoginSlaver");
    }
    return (
        <>
            <NavSlaver />
            <SlaveTable />
        </>
    );
};

export default SlavePage;
