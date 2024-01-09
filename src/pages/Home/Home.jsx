import { fetchGetTranding } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetchGetTranding()
      .then(responce => setMovies(responce))
      .catch(error => console.log(error.message))
  }, []);

  return (
    <div>
      <title>Trending movies</title>
      {movies.length && <MovieList movies={movies}/>}
    </div>
  )
}

export default Home;