import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ToyCard = ({ item }) => {
    const { _id, image, Price, Rating, toy_name } = item;

    const handleToast = () => {
        toast("You have to log in first to view details!");


    }

    return (
        <div className="mx-auto">
            <div className="card w-96 bg-cyan-100">
                <figure><img className="mt-2" src={image} alt="Shoes" /></figure>

                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Rating:{Rating}</p>
                    <p>Price:${Price}</p>

                    <div className='flex '>
                        <button onClick={() => handleToast()} className=' flex-grow rounded btn btn-outline bg-cyan-100  mt-4'><Link to={`/toys/${_id}`}>View details</Link></button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;