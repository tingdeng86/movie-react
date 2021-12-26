// Page - Portfolio
import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

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
            console.log(liked)

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
                <section className="portfolio-movie-section">
                    {movie != null &&
                        <div>
                            <h2>{movie.title}</h2>
                            <MovieCard movie={movie} />

                            <button onClick={handleClick} style={{ backgroundColor: liked ? "red" : "white" }} className="css-7yqnvc">
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="css-29qfqk eanm77i0" data-comp="Icon StyledComponent "><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path></svg></button>
                            <Link to="/" className="link-back-to-home">Back to Home Page</Link>
                        </div>
                    }
                </section>
            }
        </main>
    );
}

export default PageIndividualMovie;