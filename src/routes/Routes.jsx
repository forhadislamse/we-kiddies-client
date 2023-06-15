import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ToyCardDetails from "../pages/Home/Category/ToyCardDetails";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'addtoy',
                element: <AddToys></AddToys>
            },
            {
                path: 'mytoys',
                element: <MyToys></MyToys>
            },


            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyCardDetails></ToyCardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://we-kiddies-server.vercel.app/toys/${params.id}`)
            },

        ]
    },
]);