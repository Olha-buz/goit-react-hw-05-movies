
import React, {lazy} from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home>Home</Home>} />
        <Route path='movies' element={<Movies></Movies>} />
        <Route path='movie/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast/> } />
          <Route path='reviews' element={<Reviews/> } />
        </Route>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Route>  
    </Routes>
  );
};



// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}