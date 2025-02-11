import PropTypes from "prop-types";
import {ProductContext} from "../../Context/Product.jsx";
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
    const {addToCart} = useContext(ProductContext)

    return (
        <div className="product-card">
            <div onClick={productDetails}>
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
            </div>
            <div className="product-actions">
                <button className="product-button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}