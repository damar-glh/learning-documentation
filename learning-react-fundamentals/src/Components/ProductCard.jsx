import PropTypes from "prop-types";

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

    return (
        <div className="product-card">
            <img src={props.images[0]} alt={props.name}/>
            <p className="product-category">{props.category}</p>
            <div className="product-content">
                <h3 className="product-title">{props.name}</h3>
                <p className="product-price">${props.price}</p>
            </div>
            {/*<p className="product-stock">Available: {props.stock}</p>*/}
            {/*<p className="product-rating">{props.rating}</p>*/}
            <p className="product-description">{props.description}</p>
            <button className="product-button">Add to Cart</button>
        </div>
    )
}