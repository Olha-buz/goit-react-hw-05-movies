import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './MovieList.module.css'


const MovieList = ({movies}) => {
    const location = useLocation();
    
    return (
        <ul className={css.movieList}>
            {movies.length > 0 && movies.map(movie => {
                return (
                    <li className={ css.movieItem} key={movie.id}>
                        <Link className={css.movieItemLink} to={`/movies/${movie.id}`} state={{ from: location }}>
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