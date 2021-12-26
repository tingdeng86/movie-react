// Page - Home
import { useState, useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Movies from '../components/Movies';

const PageHome = () => {
    const [error, setError] = useState(null);

    const [items, setItems] = useState([])
    const [selection, setSelection] = useState("popular")
    const [baseUrl, setBaseUrl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=d6441bcd0c7210bd6baec2676da16bd1")


    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    function handleChange(e) {
        setSelection(e.target.value)
        setBaseUrl("https://api.themoviedb.org/3/movie/" + e.target.value + "?api_key=d6441bcd0c7210bd6baec2676da16bd1")
    }
    // useEffect(()=>{
    //     const getMovies =async () => {
    //         try {
    //             const response = await fetch(baseUrl)
    //             const responseJson = await response.json()
    //             const moives = responseJson.results.slice(0, 12)
    //             setItems(moives)
    //         } catch (e) {
    //             setError(e)
    //         }
    //     getMovies()
    // },[baseUrl]);
    useEffect(async () => {
        try {
            const response = await fetch(baseUrl)
            const responseJson = await response.json()
            const moives = responseJson.results.slice(0, 12)
            setItems(moives)
        } catch (e) {
            setError(e)
        }
    }, [baseUrl]);

    function createForm() {
        return (
            <div className="select-container">
                <label for="displays">Sort by </label>
                <select name="displays" id="displays" value={selection} onChange={handleChange} >
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="now_playing">Now Playing</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>
        )
    }

    return (
        <main>
            <section>
                <h2>Home Page</h2>
                {error ? <div>Error: {error.message}</div> :
                    <div>
                        {createForm()}
                        {items.length < 1 ?
                            <p>Fetching Movies</p> :
                            <Movies moviesData={items} path="movie/" isLink={true}/>
                        }
                    </div>
                }

            </section>
        </main>
    );

};

export default PageHome;