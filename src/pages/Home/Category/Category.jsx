import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from "../../../components/SectionTitle";
import useToys from "../../../hooks/useToys";
import CategoryItem from "./CategoryItem";
// import { useParams } from "react-router-dom";

const Category = () => {
    // const categories = ['lego_cars', 'lego_wars', 'lego_city'];
    // const { category } = useParams();
    // const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(0);
    const [toys] = useToys();
    const lego_cars = toys.filter(item => item.sub_category === 'lego_cars');
    const lego_wars = toys.filter(item => item.sub_category === 'lego_wars');
    const lego_city = toys.filter(item => item.sub_category === 'lego_city');
    return (
        <div>
            <SectionTitle heading='Shop By Sub-category'></SectionTitle>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center my-4 bg-cyan-200 bg-opacity-20 py-4 font-bold">
                    <Tab>lego_cars</Tab>
                    <Tab>lego_wars</Tab>
                    <Tab>lego_city</Tab>

                </TabList>
                <TabPanel>
                    <CategoryItem items={lego_cars}></CategoryItem>
                </TabPanel>
                <TabPanel>
                    <CategoryItem items={lego_wars}></CategoryItem>
                </TabPanel>
                <TabPanel>
                    <CategoryItem items={lego_city}></CategoryItem>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Category;