import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import { deleteFav } from '../features/fav/favSlice';
import MovieCard from '../components/MovieCard';
import { FaHeart} from 'react-icons/fa';

function PageFavs() {
    useEffect(() => {
        document.title = `${appTitle} - My Favourites`;
    }, []);
    const favs = useSelector((state) => state.fav.favs)
    const dispatch = useDispatch()

    return (
        <main>
            <section className="favourites-section">
                <h2 className='fav-title'>
                    My Favourites
                </h2>
                <div >
                    {favs.length === 0 ?
                        <p>Sorry you have no favourited movies. Return to the home page to add a
                            favourite movie.</p> :
                        <div className="movies-grid">
                            {favs.map(movie => <MovieCard key={movie.id} movie={movie} >
                                {<div className='fav-children'>
                                    <FaHeart className="red-heart" onClick={() => dispatch(deleteFav(movie))} /> :
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
