import { Helmet } from "react-helmet-async";
import useToys from "../../hooks/useToys";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const AllToys = () => {
    const [toys] = useToys()
    return (
        <div className="w-full">
            <Helmet>
                <title> WeKiddies | All Toys</title>
            </Helmet>
            <SectionTitle heading={`All Toys: ${toys.length}`}></SectionTitle>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {item.seller_name}
                                </td>
                                <td>
                                    {item.toy_name}
                                </td>
                                <td>
                                    {item.sub_category}
                                </td>
                                <td>
                                    {item.Price}
                                </td>
                                <td>
                                    {item.avail_quantity}
                                </td>

                                <td>
                                    <button className="btn btn-ghost bg-cyan-300  text-white"><Link to={`/toys/${item._id}`}>View details</Link></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;