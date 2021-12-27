const SearchBar = ({ onChange, placeholder, onClick }) => {
    return (
        <form className="search" action="/" method="get">
                <input
                    className="searchInput"
                    type="text"
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <button className="searchButton" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;