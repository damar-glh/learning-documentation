// eslint-disable-next-line react/prop-types
function Search({handleSearch}){
    return (
        <>
            <div className="">Cari Artikel : <input type="text" onChange={handleSearch} />{" "}</div>
        </>
    )

}

export default Search;