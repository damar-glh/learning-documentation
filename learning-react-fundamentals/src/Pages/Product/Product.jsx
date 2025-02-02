import ProductComponent from "../../Components/ProductComponent.jsx";
import "./Product.css";

export default function Product() {
    return (
        <div className="product">
            <h1 className="title">New Product</h1>
            <p className="description">
                This is the Product page where you can see all the products available.
            </p>
            <ProductComponent/>
        </div>
    )
}