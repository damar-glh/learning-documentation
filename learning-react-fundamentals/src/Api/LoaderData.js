import Data from '../Data/Product.json';

export const ProductContext = () => {
    return (
        Data
    )
}

export const ProductById = (id) => {
    return (
        console.log(Data.find((product) => product.id === parseInt(id)))
    )
}