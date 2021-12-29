// Page - Portfolio
import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import whiteHeart from '../images//heart-492.png';
import redHeart from '../images/red-heart.png';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/fav/favSlice';
import { selectMovie } from '../features/movie/movieSlice';
import FavButton from '../components/FavButton';

const PageIndividualMovie = () => {

    const { id } = useParams();
    const favs = useSelector((state) => state.fav.favs)
    const filteredMovies = useSelector((state) => state.movie.filteredMovies)

    console.log(favs)
    const dispatch = useDispatch()
    const movie = useSelector((state) => state.movie.selectedMovie)

    useEffect(() => {
        document.title = `${appTitle} - Individual Movie ${id}`;
        let found = getMovie(id, filteredMovies) || getMovie(id, favs)
        dispatch(selectMovie(found))
    }, []);

    function inFav(id, arr) {
        console.log(id)
        console.log(arr)
        const index = arr.some(item => item.id == id)
        console.log(index)
        return index
    }
    function getMovie(id, arr) {
        return arr.find(item => item.id == id)
    }
    if (isNaN(id) || (id % 1 !== 0) || id < 1) {
        return (
            <Navigate to="/" replace={true} />
        )
    }



    return (
        <main>
            <section className="movie-section">
                {movie != null &&
                    <div>
                        <div className="top-container">
                            <h2>{movie.title}</h2>
                        </div>
                        <MovieCard movie={movie} >
                            {inFav(id, favs) === true ?
                                <FavButton onClick={dispatch(deleteFav(movie))} source={redHeart} /> :
                                <FavButton onClick={dispatch(addFav(movie))} source={whiteHeart} /> 
                                }
                        </MovieCard>
                        <Link to="/" className="link-back-to-home">Back to Home Page</Link>

                    </div>
                }
            </section>
        </main>
    );
}

export default PageIndividualMovie;