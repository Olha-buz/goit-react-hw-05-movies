import React, {Suspense, lazy} from 'react';
import { Route, Routes } from "react-router-dom";



const Loader = lazy(() => import('../components/Loader/Loader'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home>Home</Home>} />
        <Route path='/movies' element={<Movies>Movies</Movies>} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast/> } />
          <Route path='reviews' element={<Reviews/> } />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>  
      </Routes>
      </Suspense>
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