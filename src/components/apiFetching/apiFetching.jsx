import React, { useState } from 'react';
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
    `https://api.themoviedb.org/3/${movieId}?api_key=${apiKey}`
  );
  if (response === null) {
    Notify.failure('Fetching movies failed, please try again later');
  }
  return response.data;
}
