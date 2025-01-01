import {useState} from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard.jsx";
import productsData from "../Data/Product.json";
import Search from "./Search.jsx";

ProductComponent.propTypes = {
    id: PropTypes.number
}

export default function ProductComponent() {
    const [search, setSearch] = useState("");

    function handleSearchInput(searchInput) {
        setSearch(searchInput);
    }

    const filteredProducts = productsData.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <>
            <Search onSearchInput={handleSearchInput}/>
            <div className="product-container">
                {filteredProducts.length === 0 && <p>No products found</p>}
                {filteredProducts.map((props) => {
                    return (
                        <ProductCard
                            key={props.id}
                            {...props}
                        />
                    )
                })}
            </div>
        </>
    )
}