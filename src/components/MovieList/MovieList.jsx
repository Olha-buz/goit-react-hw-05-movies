import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const MovieList = ({movies}) => {
    const location = useLocation();
    
    return (
        <ul>
            {movies.length > 0 && movies.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            <h4>{movie.title}</h4>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList;