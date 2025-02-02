import {createContext} from 'react';

export const ProductContext = createContext({
    name: 'Product',
    price: 0,
    tags: [],
    description: 'Product description',
    category: 'Product category',
    stock: 0,
    rating: 0,
    images: [],
    isAvailable: false,
    isOnSale: false,
});