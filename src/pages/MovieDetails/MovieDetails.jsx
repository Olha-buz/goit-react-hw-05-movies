const { fetchMovieId } = require("api/api");
const { useState, useRef, useEffect } = require("react");
const { useLocation, useParams, Link, Outlet } = require("react-router-dom");

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const { movieId } = useParams();
    const linkRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        fetchMovieId(movieId)
            .then(movie => setMovie(movie))
            .catch(error => {
                console.log(error.message);
                setMovie([]);
            })
    }, [movieId]);

    // if (!movie) return;

    function countUserScore() {
        const average = movie.vote_average;
        const userScore = Math.round(average * 10).toFixed(0) + '%';
        return userScore;
    };

    const release = new Date(movie.release_date).getFullYear();
    const { genres } = movie;


    return (
        <div>
            <button className='backbtn' to={linkRef.current}>Go back</button>
            <div className='movieInfo'>
                <img src={movie.poster_path} alt={movie.title} />
                <div className='intoText'>
                    <h2>{movie.title} ({release ? release : movie.status})</h2>
                    <p>User Score: {countUserScore}</p>
                    <h3>Overview </h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{genres && genres.map(genre => genre.name).join(' ')}</p>
                </div>
            </div>
            <div className='additional'>
                <p>Additional information</p>
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
            
        </div>
    )
};
