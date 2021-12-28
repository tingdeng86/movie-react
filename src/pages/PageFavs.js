import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import redHeart from '../images/red-heart.png';
import { deleteFav } from '../features/favSlice';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';


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
                            {favs.map(movie => <MovieCard key={movie.id} movie={movie} path={"movie/" + movie.id}>
                                {<div className='fav-children'>
                                    <button onClick={() => disPatch(deleteFav(movie))} className="fav-button">
                                        <img src={redHeart} alt="Heart" />
                                    </button>
                                    <Link className="more-info" to={"../movie/" + movie.id} >More Info</Link>
                                </div>}
                            </MovieCard>)
                            }
                        </div>
                    }
                </div>

            </section>
        </main>
    )
}

export default PageFavs
