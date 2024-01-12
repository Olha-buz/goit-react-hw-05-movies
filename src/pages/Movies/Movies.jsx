import { fetchSearchMovie } from 'api/api';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get('query');

  // console.log(searchParams);
  // console.log(query);

  useEffect(() => {

    if (!query) return;
    setLoading(true);
    
    fetchSearchMovie(query)
      .then(searchMovie => {
        setMovies(searchMovie);
        setError(searchMovie.length === 0);
      })
      .catch(error => {
        console.log(error.message)
      })
      .finally(() => {
        setLoading(false);
      });
    
  }, [query]);

  const setParams = value => {
    // console.log(value);
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchForm setParams={setParams} />
      {loading && <Loader />}
      {error && (<h2>Nothing find</h2>)}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  )
};

export default Movies;