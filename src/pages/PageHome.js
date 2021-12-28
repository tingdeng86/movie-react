// Page - Home
import { useState, useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Movies from '../components/Movies';
import SearchBar from '../components/SeachBar';

const PageHome = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([])
    const [terms, setTerms] = useState([])
    const [value, setValue] = useState("")
    const [selection, setSelection] = useState("popular")
    const [baseUrl, setBaseUrl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=d6441bcd0c7210bd6baec2676da16bd1")


    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

   
    // useEffect(()=>{
    //     const getMovies =async () => {
    //         try {
    //             const response = await fetch(baseUrl)
    //             const responseJson = await response.json()
    //             const movies = responseJson.results.slice(0, 12)
    //             setItems(movies)
    //         } catch (e) {
    //             setError(e)
    //         }
    //     getMovies()
    // },[baseUrl]);
    useEffect(async () => {
        try {
            const response = await fetch(baseUrl)
            const responseJson = await response.json()
            const movies = responseJson.results.slice(0, 12)
            setItems(movies)
            setTerms(movies)
        } catch (e) {
            setError(e)
        }
    }, [baseUrl]);

    function sort(e) {
        setSelection(e.target.value)
        setBaseUrl("https://api.themoviedb.org/3/movie/" + e.target.value + "?api_key=d6441bcd0c7210bd6baec2676da16bd1")
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

    function filterMovie(term){
        let filteredMovies = [...items]
        if(term){
            filteredMovies = filteredMovies .filter(item=>{
                return(
                    item.title.toLowerCase().indexOf(term.toLowerCase()) >-1
                )
            })
        }
        setTerms(filteredMovies)
    }

    function cancelfiltering(){
        setValue("") 
        filterMovie("")    
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
                            onChange={(e)=>{filterMovie(e.target.value)
                                            setValue(e.target.value)
                            }}
                            onClick={cancelfiltering}
                            value={value}
                        />
                        </div>
                        {items.length < 1 ?
                            <p>Fetching Movies</p> :
                            <Movies moviesData={terms} path="movie/" isLink={true}/>
                        }
                    </div>
                }

            </section>
        </main>
    );

};

export default PageHome;