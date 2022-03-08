// Page - Home
import { useState, useEffect } from 'react';
import { appTitle } from '../globals/globals';
import FilterBar from '../components/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setUrl, setSelection, filterMovie } from '../features/movie/movieSlice';
import { api } from '../globals/globals';
import { baseUrl } from '../globals/globals';
import MovieCard from '../components/MovieCard';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import { addFav, deleteFav } from '../features/fav/favSlice';

const PageHome = () => {
    const [error, setError] = useState(null);

    const selection = useSelector((state) => state.movie.selection)
    const url = useSelector((state) => state.movie.url)
    const value = useSelector((state) => state.movie.value)
    const filteredMovies = useSelector((state) => state.movie.filteredMovies)
    const favs = useSelector((state) => state.fav.favs)
    // console.log(filteredMovies)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(url)
            const responseJson = await response.json()
            const movies = responseJson.results.slice(0, 12)
            dispatch(getMovies(movies))
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [url]);


    function sort(e) {
        dispatch(setSelection(e.target.value))
        dispatch(setUrl(baseUrl + e.target.value + api))
    }

    function createForm() {
        return (
            <div className="select-container">
                <label htmlFor="displays">Sort: </label>
                <select className="select-input" name="displays" id="displays" value={selection} onChange={sort} >
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="now_playing">Now Playing</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>
        )
    }

    function cancelfiltering() {
        dispatch(filterMovie(""))

    }

    function inFav(id, arr) {
        return arr.some(item => item.id == id)
    }

    return (
        <main>
            <section className="home-main-section">
                {/* <h2>Home</h2> */}
                {error ? <div>Error: {error.message}</div> :
                    <div>
                        <div className="bar-container">
                            {createForm()}
                            <FilterBar
                                placeholder="filter by title"
                                onChange={(e) => {
                                    dispatch(filterMovie(e.target.value))
                                }}
                                onClick={cancelfiltering}
                                value={value}
                            />
                        </div>
                        {filteredMovies.length < 1 ?
                            <div className="loading-sect">
                                <p className="loader">No Result.</p>
                            </div> :
                            <div className="movies-grid">
                                {filteredMovies.map(movie =>
                                    <MovieCard key={movie.id} movie={movie} >
                                        {<div className='fav-children'>
                                            {inFav(movie.id, favs) === true ?
                                                <BsFillHeartFill className="red-heart" onClick={() => dispatch(deleteFav(movie))} /> :
                                                <BsHeart className="white-heart" onClick={() => dispatch(addFav(movie))} />
                                            }
                                        </div>}
                                    </MovieCard>)
                                }
                            </div>
                        }
                    </div>
                }
            </section>
        </main>
    );

};

export default PageHome;