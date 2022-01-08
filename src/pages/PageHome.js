// Page - Home
import { useState, useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Movies from '../components/Movies';
import SearchBar from '../components/SeachBar';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setUrl, setSelection, filterMovie } from '../features/movie/movieSlice';
import { api } from '../globals/globals';
import { baseUrl } from '../globals/globals';

const PageHome = () => {
    const [error, setError] = useState(null);

    const selection = useSelector((state) => state.movie.selection)
    const url = useSelector((state) => state.movie.url)
    const value = useSelector((state) => state.movie.value)
    const filteredMovies = useSelector((state) => state.movie.filteredMovies)
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

    return (
        <main>
            <section>
                <h2>Home Page</h2>
                {error ? <div>Error: {error.message}</div> :
                    <div>
                        <div className="bar-container">
                            {createForm()}
                            <SearchBar
                                placeholder="filter by title"
                                onChange={(e) => {
                                    dispatch(filterMovie(e.target.value))
                                }}
                                onClick={cancelfiltering}
                                value={value}
                            />
                        </div>
                        {filteredMovies.length < 1 ?
                            <p>No Result.</p> :
                            <Movies moviesData={filteredMovies} path="movie/" isLink={true} />
                        }
                    </div>
                }

            </section>
        </main>
    );

};

export default PageHome;