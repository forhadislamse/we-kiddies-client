import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
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
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            }

        ]
    },
]);