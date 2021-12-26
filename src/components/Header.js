import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
    return (
        <header className="top-bar">
            <h1><Link to='/'>Movie Mania</Link></h1>
            <a href="#menu" class="btn-menu" id="btn-menu">Menu</a>
           <Nav />
        </header>
    )
}

export default Header;