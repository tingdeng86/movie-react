// Page - Portfolio
import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import whiteHeart from '../images/heart-492.png';
import redHeart from '../images/heart-992.png';

const PageIndividualMovie = () => {
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null)
    const [liked, setLiked] = useState(false)
    const [favourites, setFavourites] = useState([])
    const { id } = useParams();

    useEffect(() => {
        document.title = `${appTitle} - Individual Movie ${id}`;
    }, []);
    useEffect(async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6441bcd0c7210bd6baec2676da16bd1`)
            const movie = await response.json()
            setMovie(movie)
            const storage = JSON.parse(localStorage.getItem("favourites") || "0")
            console.log(storage)

            if (storage != 0) {
                setFavourites([...storage])
            }
            const index = storage.findIndex(item => item.id == id)
            console.log(movie)
            // console.log(storage[0].id)
            if (index > -1) {
                setLiked(true)
            }
            

        } catch (e) {
            setError(e)
        }
    }, []);


    if (isNaN(id) || (id % 1 !== 0) || id < 1) {
        return (
            <Navigate to="/" replace={true} />
        )
    }

    function handleClick() {
        let myFavs = [...favourites]
        setLiked(!liked)
        const index = myFavs.findIndex(item => item.id == id)
        if (index > -1) {
            myFavs.splice(index, 1)
        } else {
            myFavs.push(movie)
        }
        setFavourites(myFavs)
        localStorage.setItem("favourites", JSON.stringify(myFavs));
    }

    return (
        <main>
            {error ? <div>Error: {error.message}</div> :
                <section className="movie-section">
                    {movie != null &&
                        <div>
                            <div className="top-container">
                            <h2>{movie.title}</h2>
                            <button onClick={handleClick}  className="fav-button">
                                <img src={liked ? redHeart: whiteHeart} alt="Heart" />
                            </button>
                            </div>
                            <MovieCard movie={movie} />                           
                            <Link to="/" className="link-back-to-home">Back to Home Page</Link>
                        </div>
                    }
                </section>
            }
        </main>
    );
}

export default PageIndividualMovie;