import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useState} from 'react';

function Header() {
    const [navOpen, setNavOpen] = useState(false)
    function handleShow(){
        setNavOpen(!navOpen)
    }

    return (
        <header className="top-bar" >
            <h1><Link to='/'>Movie Mania</Link></h1>
            <a onClick ={handleShow} href="#menu" className="btn-menu" >Menu</a>
           <Nav style={{display: navOpen&&"block"}} />
        </header>
    )
}

export default Header;