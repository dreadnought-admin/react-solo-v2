const Search = ({ setSearch }) => {
 
 
    const handleChange = (e) => setSearch(e.target.value);
 
    return (
        <div className="searchbar">
            <label class="searchLabel" htmlFor="search">Search: </label>
 
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