import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard.jsx";
import productsData from "../Data/Product.json";
import Search from "./Search.jsx";
import FilterCategory from "./FilterCategory.jsx";
import useDebounceSearch from "../hooks/useDebounceSearch.jsx";
import FilterPrice from "./FilterPrice.jsx";
import ProductNotFound from "./ProductNotFound.jsx";
import FilterRating from "./FilterRating.jsx";

ProductComponent.propTypes = {
    id: PropTypes.number
}

export default function ProductComponent() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(productsData);
    const [loading, setLoading] = useState(true);

    const uniqueCategory = [...new Set(productsData.map((product) => product.category))];

    const onFilterCategory = (category) => {
        {
            category === "Category" ? setProducts(productsData) : setProducts(productsData.filter((product) => product.category === category))
        }
    };

    const onFilterPrice = (price) => {
        {
            price === "Price" ? setProducts(productsData) : setProducts(productsData.filter((product) => {
                    const productPrice = product.price;
                    const priceRange = price.split("-");
                    return productPrice >= parseInt(priceRange[0]) && productPrice <= parseInt(priceRange[1]);
                })
            )
        }
    }

    const onFilterRating = (rating) => {
        {
            rating === "Rating" ? setProducts(productsData) : setProducts(productsData.filter((product) => parseInt(product.rating) === parseInt(rating)))
        }
    }

    const clearFilters = () => {
        setProducts(productsData);
    }

    function handleSearchInput(searchInput) {
        setSearch(searchInput);
    }

    const debouncedSearch = useDebounceSearch(search, 1000);

    useEffect(() => {
        setProducts(productsData.filter((product) => product.name.toLowerCase().includes(debouncedSearch.toLowerCase())));
        setLoading(false);
    }, [debouncedSearch]);

    const renderProducts = loading ? <ProductNotFound/> : products.map((props) => {
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
                <div className="filter">
                    <FilterCategory categoryList={uniqueCategory} onFilterCategory={onFilterCategory}/>
                    <FilterPrice onFilterPrice={onFilterPrice}/>
                    <FilterRating onFilterRating={onFilterRating}/>
                    <button className="filter-button" onClick={clearFilters}>Clear Filters</button>
                </div>
                <Search onSearchInput={handleSearchInput}/>
            </div>
            <div className="product-container">
                {products.length === 0 && <ProductNotFound/>}
                {renderProducts}
            </div>
        </>
    )
}