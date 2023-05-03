import Products from "../components/Store/Products.jsx";
import Homepage from "../components/main/homepage.jsx";
import Nav from "../components/main/nav.jsx";

const Home = () => {
    return (
        <>
            <Nav />
            <Homepage />
            <Products/>
        </>
    );
};

export default Home;
