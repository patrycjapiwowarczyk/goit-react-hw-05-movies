import React from 'react';
import { Homepage } from 'pages/HomePage/HomePage.jsx';
import { MovieDetails } from '../MovieDetails/MovieDetails.jsx';
import { SharedLayout } from '../SharedLayout/SharedLayout.jsx';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import(`../../pages/HomePage/HomePage`));
const Movies = lazy(() =>
  import(`../../pages/MovieSearchingPage/MovieSearchingPage`)
);
const MoviesDetails = lazy(() =>
  import(`../../pages/MovieDetailsPage/MovieDetailsPage`)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
