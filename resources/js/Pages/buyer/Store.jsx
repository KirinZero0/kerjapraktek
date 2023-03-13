import Hero from "../../components/Store/hero";
import NavBuyer from "../../components/nav/Buyer";
import Featured from "../../components/Store/featured";
const StoreBuyer = () => {
    return (
        <div>
            <NavBuyer />
            <Hero />
            <Featured />
        </div>
    );
};

export default StoreBuyer;
