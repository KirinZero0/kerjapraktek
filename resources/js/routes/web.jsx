import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login1 from "../pages/buyer/auth/Login";
import Login2 from "../pages/slaver/auth/Login";
import Current from "../pages/Current";

const Web = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/LoginBuyer" element={<Login1 />} />
                <Route path="/LoginSlaver" element={<Login2 />} />
                <Route path="/Current" element={<Current />} />
            </Routes>
        </Router>
    );
};

export default Web;
