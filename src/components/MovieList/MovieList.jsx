import { Link, useLocation } from "react-router-dom";


export const MovieList = ({movies}) => {
    const location = useLocation();
    console.log(location);
    
    return (
        <ul>
            {movies.length > 0 && movies.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};
