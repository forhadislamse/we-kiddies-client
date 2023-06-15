import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy, handleDelete }) => {
    const { _id, image, toy_name, seller_name, seller_email, sub_category, Price, Rating, avail_quantity, details } = toy;
    return (
        <tr>

            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {seller_name}
            </td>
            <td>{seller_email}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>{Price}</td>
            <td>${Rating}</td>
            <td>${avail_quantity}</td>
            <td>${details}</td>
            <th>
                <button className="btn btn-md "><Link to={`updatetoys/${_id}`}><FaEdit className="text-2xl"></FaEdit>
                </Link></button>

            </th>

            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-md ">
                    <AiFillDelete className="text-2xl"></AiFillDelete>
                </button>

            </th>
        </tr>
    );
};

export default MyToysRow;