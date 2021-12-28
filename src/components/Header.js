import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useState, useEffect } from 'react';

function Header() {

    const [navOpen, setNavOpen] = useState(false)
    function handleShow(){
        setNavOpen(!navOpen)
    }

    // const isDesktop = (e) => {
    //     if(e.matches){
    //         setNavOpen(false);
    //     }
    // }
    
    // useEffect(() => {
    //       let mediaQuery = window.matchMedia('(min-width: 680px)');
    //       mediaQuery.addListener(isDesktop);
    //       // this is the cleanup function to remove the listener
    //       return () => mediaQuery.removeListener(isDesktop);
    // }, []);

    return (
        <header className="top-bar" >
            <h1><Link to='/'>Movie Mania</Link></h1>
            <a onClick ={handleShow} href="#menu" className="btn-menu" >Menu</a>
           <Nav style={{display: navOpen&&"block"}} />
        </header>
    )
}

export default Header;