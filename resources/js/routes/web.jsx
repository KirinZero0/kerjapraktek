import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login1 from "../pages/buyer/auth/Login";
import Login2 from "../pages/slaver/auth/Login";
import StoreBuyer from "../pages/buyer/Store";
import Regis from "../pages/buyer/auth/Regis";
import StoreSlaver from "../pages/slaver/Store";

const Web = () => {
    const isAuth = sessionStorage.getItem("guard");
    const isBuyer = sessionStorage.getItem("guard") === "buyer";
    const isSlaver = sessionStorage.getItem("guard") === "slaver";
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
                <Route
                    path="/StoreBuyer"
                    element={
                        isBuyer ? <StoreBuyer /> : <Navigate to="/LoginBuyer" />
                    }
                />
                <Route
                    path="/StoreSlaver"
                    element={
                        isSlaver ? (
                            <StoreSlaver />
                        ) : (
                            <Navigate to="/LoginSlaver" />
                        )
                    }
                />
                {/* <Route path="/Store" element={<Store />} /> */}
                {/* Slaver Only Page */}
                {/* Buyer Only Page */}
            </Routes>
        </Router>
    );
};

export default Web;
