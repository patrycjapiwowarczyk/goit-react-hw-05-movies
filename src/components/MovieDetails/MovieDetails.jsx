import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import axios from 'axios';
import { fetchingMovieDetails } from 'components/apiFetching/apiFetching';
import { useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetchingMovieDetails().then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
};
