const SearchBar = ({ onChange, placeholder, onClick }) => {
    return (
        <form className="search" action="/" method="get">
                <input
                    className="searchInput"
                    type="text"
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <button onClick={onClick} className="searchButton" type="submit">Clear</button>
        </form>
    );
};

export default SearchBar;