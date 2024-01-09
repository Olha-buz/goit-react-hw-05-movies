import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.length > 0 && movies.map(({ id, title }) => {
                return (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};