import ToyCard from "./ToyCard";

const CategoryItem = ({ items }) => {
    console.log(items);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {
                items.map(item => <ToyCard
                    key={item.id}
                    item={item}></ToyCard>
                )
            }
        </div>
    );
};

export default CategoryItem;