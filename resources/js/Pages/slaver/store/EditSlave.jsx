import NavSlaver from "../../../components/nav/Slaver";
import SlaveForm from "../../../components/Store/slaver/slaves/slaveform";
import IsSlaver from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import SlaveEdit from "../../../components/Store/slaver/slaves/SlaveEdit";
const EditSlave = () => {
    const navigate = useNavigate();
    if (!IsSlaver) {
        navigate("/LoginSlaver");
    }
    return (
        <>
            <NavSlaver />
            <SlaveEdit />
        </>
    );
};

export default EditSlave;
