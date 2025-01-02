import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard.jsx";
import productsData from "../Data/Product.json";
import Search from "./Search.jsx";
import FilterCategory from "./FilterCategory.jsx";
import useDebounceSearch from "../hooks/useDebounceSearch.jsx";

ProductComponent.propTypes = {
    id: PropTypes.number
}

export default function ProductComponent() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(productsData);
    const [loading, setLoading] = useState(true);

    const uniqueCategory = [...new Set(productsData.map((product) => product.category))];

    const onFilterCategory = (category) => {
        {category === "All" ? setProducts(productsData) : setProducts(productsData.filter((product) => product.category === category))}
    };

    function handleSearchInput(searchInput) {
        setSearch(searchInput);
    }

    const debouncedSearch = useDebounceSearch(search, 1000);

    useEffect(() => {
        setProducts(productsData.filter((product) => product.name.toLowerCase().includes(debouncedSearch.toLowerCase())));
        setLoading(false);
    }, [debouncedSearch]);

    const renderProducts = loading ? <p>Loading...</p> : products.map((props) => {
        return (
            <ProductCard
                key={props.id}
                {...props}
            />
        )
    });

    return (
        <>
            <div className="search-filter">
                <FilterCategory categoryList={uniqueCategory} onFilterCategory={onFilterCategory}/>
                <Search onSearchInput={handleSearchInput}/>
            </div>
            <div className="product-container">
                {products.length === 0 && <p>{search} Not found</p>}
                {renderProducts}
            </div>
        </>
    )
}