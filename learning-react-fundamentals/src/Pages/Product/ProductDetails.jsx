import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ProductContext} from "../../Context/Product.js";

export default function ProductDetails() {
    const {id} = useParams();
    const Product = useContext(ProductContext);

    const product = Product.find((product) => product.id === parseInt(id));

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}