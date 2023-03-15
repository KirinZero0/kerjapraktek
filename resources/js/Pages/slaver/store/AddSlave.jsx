import NavSlaver from "../../../components/nav/Slaver";
import SlaveForm from "../../../components/Store/slaver/slaves/slaveform";
import IsSlaver from "../../../services/auth";
import { useNavigate } from "react-router-dom";
const AddSlave = () => {
    const navigate = useNavigate();
    if (!IsSlaver) {
        navigate("/LoginSlaver");
    }
    return (
        <>
            <NavSlaver />
            <SlaveForm />
        </>
    );
};

export default AddSlave;
