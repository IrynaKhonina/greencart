import {MainBanner} from "../components/MainBanner.jsx";
import {Categories} from "../components/Categories.jsx";
import {BestSeller} from "../components/BestSeller.jsx";

export const Home = () => {
    return (
        <div className="mt-10">
            <MainBanner/>
            <Categories/>
            <BestSeller/>
        </div>
    );
};