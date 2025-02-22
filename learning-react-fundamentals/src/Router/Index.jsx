import {createBrowserRouter} from "react-router-dom";
import DefaultLayout from "../Components/Layouts/DefaultLayout";
import {lazy} from "react";
import LazyWrap from "./LazyWrap";

const Home = LazyWrap(lazy(() => import("../Pages/Home")));
const About = LazyWrap(lazy(() => import("../Pages/About")));
const Products = LazyWrap(lazy(() => import("../Pages/Product/Products")));
const ProductDetails = LazyWrap(lazy(() => import("../Pages/Product/ProductDetails")));
const Contact = LazyWrap(lazy(() => import("../Pages/Contact")));
const ErrorPage = LazyWrap(lazy(() => import("../Components/ErrorPage")));
import {ProductContext, ProductById} from "../Api/LoaderData.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/products",
                element: <Products/>,
                loader: ProductContext
            },
            {
                path: "/products/:id",
                element: <ProductDetails/>,
                dataLoader: ProductById,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }
        ]
    }
]);

export default router;