// import React, { useContext } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from '../../providers/AuthProvider';
// import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    // const { createUser, updateUserProfile, logOut } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    // const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // const password = React.useRef({});
    // password.current = watch('password', '');

    const onSubmit = (data) => {
        console.log(data);
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //         updateUserProfile(data.name, data.photoUrl)
        //             .then(() => {
        //                 console.log('user profile info updated')
        //                 reset();
        //                 Swal.fire({
        //                     position: 'top-end',
        //                     icon: 'success',
        //                     title: 'user created successfully.',
        //                     showConfirmButton: false,
        //                     timer: 1000
        //                 });
        //                 logOut()
        //                     .then(() => {
        //                         navigate('/login');
        //                     })
        //                     .catch(error => console.log(error));

        //             })
        //             .catch(error => console.log(error))
        //     })

    };
    return (
        <>
            <div className="hero min-h-screen bg-cyan-200 mt-4">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className="text-center lg:text-left w-full md:w-1/2">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card w-full md:w-3/4 bg-cyan-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text" name="name" placeholder="name" className="input input-bordered"
                                    {...register('name', { required: 'name is required' })}
                                />
                                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered"
                                    {...register('photoUrl', { required: 'photoUrl is required' })}
                                />
                                {errors.photoUrl && <p className="text-red-600">{errors.photoUrl.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email" name="email" placeholder="email" className="input input-bordered"
                                    {...register('email', { required: 'Email is required' })}
                                />
                                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center'>
                                    <input name="password" placeholder="password" className="input input-bordered w-full"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
                                    />
                                    <span className='-ms-8 text-2xl ' onClick={togglePasswordVisibility}>
                                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </span>
                                </div>
                                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase  and one special character.</p>}
                            </div>



                            <div className="form-control mt-6">
                                <input className="btn btn-error" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center py-4 "><small>Already have an account <Link to="/login" className="text-red-500 font-semibold">Login Now</Link></small></p>
                        <div className='text-center'>
                            <p className="divider">OR</p>
                            <button className=" btn mb-8"><span className='text-xl text-red-400'><AiFillGoogleCircle></AiFillGoogleCircle></span> Login with Google</button>
                        </div>
                    </div>
                </div >

            </div >
        </>
    );
};

export default SignUp;