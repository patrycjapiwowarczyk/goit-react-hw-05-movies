import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from 'components/Movies/Movies';
import { fetchingPopularMovies } from 'components/apiFetching/apiFetching';

export const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularMoviesId, setPopularMoviesId] = '';

  const handleClick = event => {
    const movie = event.target;
    console.log(movie);
  };

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
          <li key={movie.id} onClick={e => setPopularMoviesId(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
