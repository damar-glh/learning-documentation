import {useContext, useState} from "react";
import {ProductContext} from "../../Context/Product.js";
import {AuthContext} from "../../Context/Auth.js";
import Product from "./Product.jsx";

export default function Products() {
    const product = useContext(ProductContext);
    const [login, setLogin] = useState(false);
    return (
        <>
            <AuthContext.Provider value={{login, setLogin}}>
                <ProductContext.Provider value={product}>
                    <Product/>
                </ProductContext.Provider>
            </AuthContext.Provider>
        </>
    )
}