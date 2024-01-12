import InfoMovieAbout from "components/InfoMovieAbout/InfoMovieAbout";
const { fetchMovieId } = require("api/api");
const { useState, useEffect, useRef } = require("react");
const { useLocation, useParams, Link, Outlet } = require("react-router-dom");


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const { movieId } = useParams(); 
    const linkRef = useRef(location.state?.from ?? '/movies');

    console.log(movieId);
    

    useEffect(() => {
        if (!movieId) return;

        fetchMovieId(movieId)
            .then(movie => {
                setMovie(movie);
                console.log(movie);
            })
            .catch(error => {
                console.log(error.message);
             
            })
    }, [movieId]);


    return (
        <div>
            <Link className='backbtn' to={linkRef.current}>Go back</Link>
            {movie && <InfoMovieAbout movie={movie}/>}
                <ul>
                    <li>
                        <Link to="cast">
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link to="reviews">
                            Reviews
                        </Link>
                    </li>
                </ul>
                <Outlet />
        </div>
    )
};

export default MovieDetails;