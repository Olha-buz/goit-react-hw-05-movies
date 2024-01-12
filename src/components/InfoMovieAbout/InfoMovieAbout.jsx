import { PropTypes } from 'prop-types';
import css from './InfoMovieAbout.module.css';

export const InfoMovieAbout = ({movie}) => {
    const genreList = movie.genres ? movie.genres.map(el => el.name).join(', ') : 'Genre?';
    
    // console.log(movie);
    
    return (
        <>
            <div className={css.infoMovie}>
                <img className={ css.imgMovie} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width={280} />
                <div>
                    <h3>{movie.title} ({movie.release_date})</h3>
                    <h3>Userscore: {movie.vote_average}</h3>
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres:</h3>
                    <p>{genreList}</p>
                </div>
            </div>
            <h3 className={css.aditional }>Aditional information</h3>
        </>
    )
};

InfoMovieAbout.propTypes = {
   movie: PropTypes.object
}

export default InfoMovieAbout;
