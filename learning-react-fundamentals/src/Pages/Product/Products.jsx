import {useContext, useState} from "react";
import {ProductContext} from "../../Context/Product.jsx";
import {AuthContext} from "../../Context/Auth.js";
import Product from "./Product.jsx";
import {Outlet} from "react-router-dom";

export default function Products() {
    const product = useContext(ProductContext);
    const [login, setLogin] = useState(false);
    return (
        <>
            <AuthContext.Provider value={{login, setLogin}}>
                <ProductContext.Provider value={product}>
                    <Product/>
                    <Outlet/>
                </ProductContext.Provider>
            </AuthContext.Provider>
        </>
    )
}