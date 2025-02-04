import PropTypes from "prop-types";

FilterCategory.propTypes = {
    onFilterCategory: PropTypes.func,
    categoryList: PropTypes.array,
}

export default function FilterCategory({onFilterCategory, categoryList}) {
    function handleFilterCategory(event) {
        const category = event.target.value;
        onFilterCategory(category);
    }

    return (
        <div className="filter-category">
            <select name="category" onChange={handleFilterCategory}>
                <option value="Category">Category</option>
                {categoryList.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}