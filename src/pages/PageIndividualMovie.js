// Page - Portfolio
import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import whiteHeart from '../images/heart-492.png';
import redHeart from '../images/heart-992.png';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favSlice';

const PageIndividualMovie = () => {
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null)
    const { id } = useParams();
    const favs = useSelector((state) => state.fav.favs)
    console.log(favs)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = `${appTitle} - Individual Movie ${id}`;
    }, []);
    useEffect(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6441bcd0c7210bd6baec2676da16bd1`)
            const movie = await response.json()
            setMovie(movie)
        } catch (e) {
            setError(e)
        }
    }, []);
    function inFav(id, arr) {
        console.log(id)
        console.log(arr)
        const index = arr.some(item => item.id == id)
        console.log(index)
        return index
    }

    if (isNaN(id) || (id % 1 !== 0) || id < 1) {
        return (
            <Navigate to="/" replace={true} />
        )
    }



    return (
        <main>
            {error ? <div>Error: {error.message}</div> :
                <section className="movie-section">
                    {movie != null &&
                        <div>
                            <div className="top-container">
                                <h2>{movie.title}</h2>
                            </div>
                            <MovieCard movie={movie} > 
                            {inFav(id, favs) === true ?
                                    <button onClick={() => dispatch(deleteFav(movie))} className="fav-button">
                                        <img src={redHeart} alt="Heart" />
                                    </button> :
                                    <button onClick={() => dispatch(addFav(movie))} className="fav-button">
                                        <img src={whiteHeart} alt="Heart" />
                                    </button>
                                }
                            </MovieCard>
                            <Link to="/" className="link-back-to-home">Back to Home Page</Link>

                        </div>
                    }
                </section>
            }
        </main>
    );
}

export default PageIndividualMovie;