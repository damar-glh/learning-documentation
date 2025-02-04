import PropTypes from "prop-types";
import {ProductContext} from "../../Context/Product.js";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

ProductCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    tags: PropTypes.array,
    description: PropTypes.string,
    category: PropTypes.string,
    stock: PropTypes.number,
    rating: PropTypes.number,
    images: PropTypes.array,
    isAvailable: PropTypes.bool,
}


export default function ProductCard(props) {
    // const img = props.images.map((img, index) => {
    //     return (
    //         <img key={index} src={img} alt={props.name}/>
    //     )
    // })
    const product = useContext(ProductContext);
    const navigate = useNavigate();

    const productDetails = () => {
        navigate(`/products/${props.id}`);
    }

    return (
        <div className="product-card" onClick={productDetails}>
            <img src={props.images[0]} alt={props.name}/>
            <div className="product-content">
                <p className="product-category">{props.category}</p>
                <p className="product-rating">{props.rating}</p>
            </div>
            <div className="product-content">
                <h3 className="product-title">{props.name}</h3>
                <p className="product-price">${props.price}</p>
            </div>
            {/*<p className="product-stock">Available: {props.stock}</p>*/}
            {/*<p className="product-rating">{props.rating}</p>*/}
            <p className="product-description">{props.description}</p>
            {/*{product.tags.map((tag, index) => {*/}
            {/*    return (*/}
            {/*        <span key={index} className="product-tag">{tag}</span>*/}
            {/*    )*/}
            {/*})}*/}
            {product.isAvailable ? <p className="product-available">Available</p> : <p className="product-unavailable">Unavailable</p>}
            <button className="product-button">Add to Cart</button>
        </div>
    )
}