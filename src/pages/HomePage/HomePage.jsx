import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from 'components/MoviesSearching/MoviesSearching';
import { fetchingPopularMovies } from 'components/apiFetching/apiFetching';

export const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMoviesId, setPopularMoviesId] = '';

  useEffect(() => {
    async function getPopularMoviesData() {
      const popularMoviesData = await fetchingPopularMovies();
      setPopularMovies(popularMoviesData);
    }
    getPopularMoviesData();
  }, []);

  return (
    <div>
      <h1>Trending this week</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
