import React, { useState, useEffect, useLocation } from 'react';
import { Notify } from 'notiflix';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchingSearchedMovie } from 'components/apiFetching/apiFetching';

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
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter a movie name"
            value={query}
            onChange={handleChange}
            id="movie_search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <h1>Trending this week</h1>
        <ul>
          {searchedMovieData.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesSearching;
