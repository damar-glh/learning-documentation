import Header from "../../Pages/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import {ProductProvider} from "../../Context/Product.jsx";

export default function DefaultLayout() {
    return (
        <>
            <ProductProvider>
                <Header/>
                <div className="container">
                    <Outlet/>
                </div>
            </ProductProvider>
        </>
    )
}