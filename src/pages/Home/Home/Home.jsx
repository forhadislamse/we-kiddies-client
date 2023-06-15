import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    WeKiddies | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;