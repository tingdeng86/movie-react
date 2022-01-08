import noPoster from "../images/no-movie-poster.jpg";
import { baseImageUrl } from "../globals/globals";
import { Link } from "react-router-dom";

function MovieCard({ movie, path, isLink = false, children}) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No Poster" /> :
                    <img src={baseImageUrl + movie.poster_path} alt={movie.title} />
                }
            </div>
            <div className="movie-info">
                <p ><b>Title: </b>{movie.title}</p>
                <p><b>Release Date: </b>{movie.release_date}</p>
                <p><b>Rating: </b>{movie.vote_average}</p>
                <p className="movie-overview"><b>Description: </b>{movie.overview}</p>
                {children}
                {isLink && <Link className="more-info" to={`${path}${movie.id}` } >More Info</Link>}       
            </div>
                 
        </div>
    )
}

export default MovieCard
