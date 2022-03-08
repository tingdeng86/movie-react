import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useState, useEffect } from 'react';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }

    const isDesktop = (e) => {
        if (e.matches) {
            setNavOpen(false);
        }
    }

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 576px)');
        mediaQuery.addListener(isDesktop);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(isDesktop);
    }, []);

    return (
        <header className={navOpen ? 'show' : undefined}>
            <h1><Link to='/'>Movie React</Link></h1>
            <button onClick={showHideNav} href="#menu"
                className="btn-main-nav"
                onMouseDown={(e) => {
                    e.preventDefault();
                }}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>
            <Nav handleShowHideNav={showHideNav} />
        </header>
    )
}

export default Header;