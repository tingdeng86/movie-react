import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import logo from '../images/logo.svg'

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section>
                <h2>About Page</h2>
                <article>
                    <h3>Our Story</h3>
                    <p>This product uses the TMDb API but is not endorsed or certified by TMDb. This internal application for educational non-profit use, used mainly for learning how to use an API with React.</p>
                </article>
               <figure className='logo-container'>
                   <img src={logo} alt="TMDb logo" />
               </figure>
            </section>
        </main>
    );
    
};

export default PageAbout;