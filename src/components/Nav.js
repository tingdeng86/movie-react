import { NavLink } from 'react-router-dom';


const Nav = ({ handleShowHideNav }) => {
    function closeNav(e) {
        if (window.innerWidth < 576) {
            handleShowHideNav();
        } else {
            e.target.blur()
        }
    }
    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/favourites">Favourites</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                {/* <li><NavLink to="/about" className="search-icon-link">
                    <FaSearch className='search-icon' />
                </NavLink></li> */}
            </ul>
        </nav>
    );

};
export default Nav;