import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Movies from '../components/Movies';
import redHeart from '../images/heart-992.png';
import { deleteFav } from '../features/favSlice';
import MovieCard from '../components/MovieCard';


function PageFavs() {
    useEffect(() => {
        document.title = `${appTitle} - My Favourites`;
    }, []);
    const favs = useSelector((state) => state.fav.favs)
    const disPatch = useDispatch()
    return (
        <main>
            <section>
                <h2>My Favourites Page</h2>
                <div >
                    {favs.length === 0 ?
                        <p>Sorry you have no favourited movies. Return to the home page to add a
                            favourite movie”</p> :
                            <div className="movies-container">
                            {favs.map(movie=> <MovieCard key={movie.id} movie ={movie} path="movie/" isLink={true}>
                                { <button onClick={()=>disPatch(deleteFav(movie))} className="fav-button">
                                        <img src={redHeart} alt="Heart" />
                                </button>}
                            </MovieCard>) }
                            </div>
                    }
                </div>

            </section>
        </main>
    )
}

export default PageFavs
