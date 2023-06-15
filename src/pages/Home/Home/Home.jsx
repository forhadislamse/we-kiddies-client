import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import Testimonials from "../Testinomials/Testinomials";
import OverView from "./OverView/OverView";

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
            <Testimonials></Testimonials>
            <OverView></OverView>
        </div>
    );
};

export default Home;