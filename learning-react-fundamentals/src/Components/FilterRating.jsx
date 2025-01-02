import PropTypes from "prop-types";

FilterRating.propTypes = {
    onFilterRating: PropTypes.func,
}

export default function FilterRating({onFilterRating}) {
    function handleFilterRating(event) {
        const rating = event.target.value;
        onFilterRating(rating);
    }

    return (
        <div className="filter-rating">
            <select name="rating" onChange={handleFilterRating}>
                <option value="Rating">Rating</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>
        </div>
    )
}