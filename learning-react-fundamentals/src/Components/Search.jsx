import PropTypes from "prop-types";

Search.propTypes = {
    onSearchInput: PropTypes.func,
}

export default function Search({onSearchInput}) {
    function handleSearchInput(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchInput = formData.get("searchInput");
        onSearchInput(searchInput);
    }
    return (
        <div className="search">
            <form onSubmit={handleSearchInput}>
                <input type="text" placeholder="Search" name="searchInput"/>
                <button type="submit" className="btn-search">Search</button>
            </form>
        </div>
    )
}