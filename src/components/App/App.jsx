import React from 'react';
import { Homepage } from 'pages/HomePage/HomePage.jsx';
import { MovieDetails } from '../MovieDetails/MovieDetails.jsx';
import { SharedLayout } from '../SharedLayout/SharedLayout.jsx';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import(`../../pages/HomePage/HomePage`));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
