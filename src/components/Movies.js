import MovieCard from "./MovieCard"
function Movies({moviesData,path}) {
    return (
        <div className="movies-container">
            {moviesData.map(movie=> <MovieCard key={movie.id} movie ={movie} path={path} isLink={true}/>)
            }
        </div>
    )
}
export default Movies
