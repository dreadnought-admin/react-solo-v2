
const Search = ({ setSearchQuery }) => {


    const handleChange = (e) => setSearchQuery(e.target.value);

    return (
        <div className="searchbar">
            <label htmlFor="search">Search: </label>

            <input
                type="text"
                id="search"
                placeholder="Enter an anime or manga!"
                onChange={handleChange}
            />
            
        </div>
    );
}

export default Search;