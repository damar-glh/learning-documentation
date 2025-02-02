import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../Components/Layouts/DefaultLayout.jsx";
import {lazy} from "react";

const Home = lazy(() => import("../Pages/Home.jsx"));
const About = lazy(() => import("../Pages/About.jsx"));
const Products = lazy(() => import("../Pages/Product/Products.jsx"));
const Contact = lazy(() => import("../Pages/Contact.jsx"));
const ErrorPage = lazy(() => import("../Components/ErrorPage.jsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/products",
                element: <Products/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }
        ]
    }
]);

export default router;