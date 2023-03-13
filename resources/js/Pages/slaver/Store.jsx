import Hero from "../../components/Store/hero";
import NavSlaver from "../../components/nav/Slaver";
import Featured from "../../components/Store/featured";
const StoreSlaver = () => {
    return (
        <div>
            <NavSlaver />
            <Hero />
            <Featured />
        </div>
    );
};

export default StoreSlaver;
