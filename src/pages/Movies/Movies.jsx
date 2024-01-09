import { fetchSearchMovie } from 'api/api';
import Loader from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      return;
    }
    setLoading(true);
    fetchSearchMovie(query)
      .then(searchMovie => {
        setMovies(searchMovie);
        setError(searchMovie.length === 0);
      })
      .catch(error => {
        console.log(error.message)
        setMovies([]);
      })
      .finally(() => {
        setLoading(false);
      });
    
  }, [query]);

  const setParams = query => {
    const params = query !== '' ? { query } : {};
    setSearchParams(params);
  };

  return (
    <div>
      <SearchForm setParams={setParams} />
      {loading && <Loader />}
      {error && (<h2>Nothing find</h2>)}
      {(query && movies.length > 0) && (<h2>Found movie</h2>)}
      {movies.length && <MovieList movies={movies}/>}
    </div>
  )
}

export default Movies;