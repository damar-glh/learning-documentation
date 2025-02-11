import {createContext, useState} from 'react';
import productData from '../Data/Product.json';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [cart, setCart] = useState(0);

    const addToCart = () => {
        alert("Product added to cart");
        setCart(cart + 1);
    };

    return (
        <ProductContext.Provider value={{products: productData, cart, addToCart}}>
            {children}
        </ProductContext.Provider>
    );
};