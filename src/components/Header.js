import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useState } from 'react';

function Header() {
    const [navOpen, setNavOpen] = useState(false)
    function handleShow() {
        setNavOpen(!navOpen)
    }

    return (
        <header className="top-bar" >
            <h1><Link to='/'>Movie React</Link></h1>
            <button onClick={handleShow} href="#menu" className="btn-menu">
                <span class="button-content">
                    <span class="text">Menu</span>
                    <span class="bar"></span>
                </span>
            </button>
            <Nav style={{ display: navOpen && "block" }} />
        </header>
    )
}

export default Header;