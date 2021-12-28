
import MovieCard from "./MovieCard"
function Movies({moviesData,path,children}) {
    return (
        <div className="movies-container">
            {moviesData.map(movie=> <MovieCard key={movie.id} movie ={movie} path={path} isLink={true}>
                {[children]}
            </MovieCard>)
            }
        </div>
    )
}
export default Movies
