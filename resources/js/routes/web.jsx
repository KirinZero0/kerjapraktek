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
import EditSlave from "../pages/slaver/store/EditSlave";
import Cart from "../pages/Cart";
import LoginCart from "../pages/buyer/auth/LoginCart";

const Web = () => {
    return (
        <Router>
            <Routes>
                {/* Landing page */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/Contact" element={<Contact />} /> */}
                {/* Login Page */}
                <Route path="/login-buyer" element={<Login1 />} />
                <Route path="/login-slaver" element={<Login2 />} />
                {/* Register Page */}
                <Route path="/register-buyer" element={<Regis />} />
                {/* Store Page */}
                <Route path="/store-buyer" element={<StoreBuyer />} />
                <Route path="/store-slaver" element={<StoreSlaver />} />
                {/* <Route path="/Store" element={<Store />} /> */}
                {/* Slaver Only Page */}
                {/* Buyer Only Page */}
                <Route path="/store-slaver/slaves" element={<SlavePage />} />
                <Route
                    path="/store-slaver/slaves/slave-form"
                    element={<AddSlave />}
                />
                <Route
                    path="/store-slaver/slaves/slave-edit/:custom_id"
                    element={<EditSlave />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/login" element={<LoginCart />} />
            </Routes>
        </Router>
    );
};

export default Web;
