import React, { useState } from 'react';
import { Notify } from 'notiflix';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const fetchingMovies = async () => {
    const apiKey = `6f4e972748a8ce0b96b8a311e5f34016`;
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    if (!response.ok) {
      Notify.failure('Fetching movies failed, please try again later');
    }
    const popularMoviesData = await response.json();
    setPopularMovies(popularMoviesData);
    console.log(popularMovies);
  };
  fetchingMovies();
};

export default App;
