import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import logo from '../images/logo.svg'

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <main>
            <section className='about-container'>
                <div className='about-text'>
                    <article>
                        <h3>Our Story</h3>
                        <p>This product uses the TMDb API but is not endorsed or certified by TMDb. This react application for educational non-profit use, used mainly for learning how to use an API with React.</p>
                    </article>
                    <figure className='logo-container'>
                        <img src={logo} alt="TMDb logo" />
                    </figure>
                </div>
            </section>
        </main>
    );
};

export default PageAbout;