import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useState, useEffect} from 'react';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 680px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);

    return (
        <header  className={navOpen ? 'show' : undefined}>
            <h1><Link to='/'>Movie React</Link></h1>
            <button onClick={showHideNav} href="#menu" className="btn-menu">
                <span className="button-content">
                    <span className="text">Menu</span>
                    <span className="bar"></span>
                </span>
            </button>
            <Nav handleShowHideNav={showHideNav} />
        </header>
    )
}

export default Header;