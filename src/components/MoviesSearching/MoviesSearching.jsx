import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchingSearchedMovie } from 'components/apiFetching/apiFetching';
import css from './MoviesSearching.module.css';

const MoviesSearching = () => {
  const [searchedMovieData, setSearchedMovieData] = useState([]);
  const [query, setQuery] = useState(['']);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('name') ?? '';

  useEffect(() => {
    async function getSearchedMovieData() {
      const searchedMoviesData = await fetchingSearchedMovie(movieQuery);
      setSearchedMovieData(searchedMoviesData.results);
    }

    getSearchedMovieData(movieQuery);
    setQuery(movieQuery);
  }, [movieQuery]);

  const handleSearch = async event => {
    event.preventDefault();
    const searchedMoviesData = await fetchingSearchedMovie(query);
    setSearchedMovieData(searchedMoviesData.results);
    setSearchParams({ name: query });
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className={css.moviesSearching__container}>
      <div className={css.moviesSearching}>
        <form className={css.moviesSearching__form} onSubmit={handleSearch}>
          <input
            className={css.moviesSearching__input}
            type="text"
            placeholder="Enter a movie name"
            value={query}
            onChange={handleChange}
            id="movie_search"
          />
          <button className={css.moviesSearching__button} type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        <ul className={css.moviesSearching__list}>
          {searchedMovieData.map(movie => (
            <li key={movie.id}>
              <Link
                className={css.moviesSearching__link}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesSearching;
