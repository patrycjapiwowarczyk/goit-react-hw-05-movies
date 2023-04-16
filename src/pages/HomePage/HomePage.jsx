import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchingPopularMovies } from 'components/apiFetching/apiFetching';
import css from './HomePage.module.css';

export const Homepage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function getPopularMoviesData() {
      const popularMoviesData = await fetchingPopularMovies();
      setPopularMovies(popularMoviesData);
    }
    getPopularMoviesData();
  }, []);

  return (
    <div className={css.trendingMovies__container}>
      <h1 className={css.trendingMovies__header}>Trending this week</h1>
      <ul className={css.trendingMovies__list}>
        {popularMovies.map(movie => (
          <li className={css.trendingMovies__item} key={movie.id}>
            <Link
              className={css.trendingMovies__link}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
