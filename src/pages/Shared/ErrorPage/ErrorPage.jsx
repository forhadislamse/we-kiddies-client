import { FaHome } from "react-icons/fa";
import { Link, useRouteError, } from 'react-router-dom'
import errorImg from '../../../assets/404.jpg'
import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    const { error, status } = useRouteError();


    return (
        <div className="grid grid-cols-1 w-full">
            <Helmet>
                <title>
                    WeKiddies | Not Found
                </title>
            </Helmet>
            <div>
                <img className="mx-auto" src={errorImg} alt="" />
            </div>
            <div className="lg:mt-20 text-center">
                <p className="text-2xl md:text-4xl text-cyan-500">Opps!!! Page not found.</p>
                <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                    <span className='sr-only'>Error</span> {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl mb-8'>
                    {error?.message}
                </p>
                <Link to="/" className="btn btn-info"><FaHome className="text-3xl"></FaHome> Go To Home</Link>
            </div>


        </div>
    )
}

export default ErrorPage;
