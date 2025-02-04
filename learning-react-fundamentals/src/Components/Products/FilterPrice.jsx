import PropTypes from "prop-types";

FilterPrice.propTypes = {
    onFilterPrice: PropTypes.func,
}

export default function FilterPrice({onFilterPrice}) {
    function handleFilterPrice(event) {
        const price = event.target.value;
        onFilterPrice(price);
    }

    return (
        <div className="filter-price">
            <select name="price" onChange={handleFilterPrice}>
                <option value="Price">Price</option>
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201-500">$201 - $500</option>
                <option value="501-1000">$501 - $1000</option>
            </select>
        </div>
    )
}