import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const AddToys = () => {
    const { register, handleSubmit } = useForm();

    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        const { image, toy_name, seller_name, seller_email, sub_category, Price, Rating, avail_quantity, details } = data;
        const newToy = { image, toy_name, seller_name, seller_email, sub_category, Price: parseFloat(Price), Rating: parseFloat(Rating), avail_quantity: parseFloat(avail_quantity), details };
        console.log(newToy);

        // send data to the server
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-full px-10">
            <SectionTitle heading="Add A Toy" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Toy Name"
                            {...register("toy_name", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input type="text" placeholder="image"
                            {...register("image", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="seller_name"
                            {...register("seller_name", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Seller Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email"
                            {...register("seller_email", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <select defaultValue="Pick One" {...register("sub_category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>lego_cars</option>
                            <option>lego_wars</option>
                            <option>lego_city</option>

                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" {...register("Price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <input type="number" {...register("Rating", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available quantity</span>
                        </label>
                        <input type="number" {...register("avail_quantity", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <input className="btn btn-sm mt-4" type="submit" value="Add A Toy" />
            </form>
        </div>
    );
};

export default AddToys;