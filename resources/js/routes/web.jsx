import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login1 from "../pages/buyer/auth/Login";
import Login2 from "../pages/slaver/auth/Login";
import StoreBuyer from "../pages/buyer/store/Store";
import Regis from "../pages/buyer/auth/Regis";
import StoreSlaver from "../pages/slaver/store/Store";
import SlavePage from "../pages/slaver/store/Slaves";
import AddSlave from "../pages/slaver/store/AddSlave";

const Web = () => {
    return (
        <Router>
            <Routes>
                {/* Landing page */}
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                {/* <Route path="/Contact" element={<Contact />} /> */}
                {/* Login Page */}
                <Route path="/LoginBuyer" element={<Login1 />} />
                <Route path="/LoginSlaver" element={<Login2 />} />
                {/* Register Page */}
                <Route path="/RegisterBuyer" element={<Regis />} />
                {/* Store Page */}
                <Route path="/StoreBuyer" element={<StoreBuyer />} />
                <Route path="/StoreSlaver" element={<StoreSlaver />} />
                {/* <Route path="/Store" element={<Store />} /> */}
                {/* Slaver Only Page */}
                {/* Buyer Only Page */}
                <Route path="/StoreSlaver/Slaves" element={<SlavePage />} />
                <Route
                    path="/StoreSlaver/Slaves/SlaveForm"
                    element={<AddSlave />}
                />
            </Routes>
        </Router>
    );
};

export default Web;
