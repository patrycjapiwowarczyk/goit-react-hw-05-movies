import { Notify } from 'notiflix';
import axios from 'axios';

const apiKey = `6f4e972748a8ce0b96b8a311e5f34016`;

export async function fetchingPopularMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );
  if (response === null) {
    Notify.failure('Fetching movies failed, please try again later');
  }
  let popularMoviesList = [];
  response.data.results.forEach(movie => {
    return popularMoviesList.push({ id: movie.id, title: movie.title });
  });
  return popularMoviesList;
}

export async function fetchingMovieDetails(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );
  if (response === null) {
    Notify.failure('Fetching movies failed, please try again later');
  }
  return response.data;
}

export async function fetchingSearchedMovie(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
  if (response === null) {
    Notify.failure('Fetching movies failed, please try again later');
  }
  return response.data;
}

export async function fetchingMovieCast(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
  );
  if (response === null) {
    Notify.failure('Fetching movies failed, please try again later');
  }
  return response.data;
}

export async function fetchingMovieReviews(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
  );
  if (response === null) {
    Notify.failure('Fetching movies failed, please try again later');
  }
  return response.data;
}
