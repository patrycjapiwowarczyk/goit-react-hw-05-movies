import React from 'react';
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
const Cast = lazy(() => import(`../Cast/Cast`));
const Reviews = lazy(() => import(`../Reviews/Reviews`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
