import { useLoaderData } from "react-router-dom";

const ToyCardDetails = () => {
    const viewDetails = useLoaderData();
    console.log(viewDetails);
    const { image, toy_name, seller_name, seller_email, sub_category, Price, Rating, avail_quantity, details } = viewDetails;
    return (
        <div className="hero mt-4 rounded md:h-[400px]  bg-cyan-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" rounded shadow-xl" />
                <div className="text-white">
                    <h1 className="text-2xl font-bold">{toy_name}</h1>
                    <p className="py-6 font-bold">{details}</p>
                    {/*  */}
                    <div className="flex flex-col lg:flex-row lg:gap-10 font-semibold">
                        <div>
                            <p>Seller Name: {seller_name}</p>
                            <p>Seller Email: {seller_email}</p>
                            <p>Sub Category: {sub_category}</p>
                        </div>
                        <div>
                            <p>Price: ${Price}</p>
                            <p>Rating: {Rating}</p>
                            <p>Available Quantity: {avail_quantity}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToyCardDetails;