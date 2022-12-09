const Search = ({ setSearch }) => {
 
 
    const handleChange = (e) => setSearch(e.target.value);
 
    return (
        <div className="searchbar">
            <label class="searchLabel" htmlFor="search">Search: </label>
 
            <input
                class="queryBox"
                type="text"
                id="search"
                placeholder="Search for..."
                onChange={handleChange}
            />
           
        </div>
    );
}
 
export default Search;