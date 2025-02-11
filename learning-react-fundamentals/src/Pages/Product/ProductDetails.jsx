import {useParams} from "react-router-dom";
import {useContext} from "react";
import {ProductContext} from "../../Context/Product.jsx";
import "./ProductDetails.css";
import star from "../../assets/star.svg";
import starhalf from "../../assets/star-half.svg";

export default function ProductDetails() {
    const {id} = useParams();
    const Product = useContext(ProductContext);

    const product = Product.products.find((product) => product.id === parseInt(id));
    const images = product.images.map((image, index) => {
        return (
            <img key={index} src={image} alt={product.name} className="choice-img"/>
        )
    })
    const productPicker = (e) => {
        const container = document.querySelector(".container-img");
        container.src = e.target.src;
    }
    const renderRating = () => {
        const stars = [];
        for (let i = 0; i < product.rating; i++) {
            if (i < parseInt(product.rating)) {
                stars.push(<img src={star} alt="star" key={i}/>)
            } else {
                stars.push(<img src={starhalf} alt="star" key={i}/>)
            }
        }
        console.log(stars);
        return stars;
    }

    return (
        <div className="product-details">
            <div className="product-img">
                <img src={product.images[0]} alt={product.name} className="container-img"/>
                <div className="img" onClick={productPicker}>
                    {images}
                </div>
            </div>
            <div className="product-contents">
                <p>Products / {product.category} / {product.name}</p>
                <div className="rating">
                    {renderRating()}
                    {product.rating}
                </div>
                <h1>{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}