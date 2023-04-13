import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import axios from 'axios';
import { fetchingMovieDetails } from 'components/apiFetching/apiFetching';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    fetchingMovieDetails(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  const year = release_date.substring(0, 4);
  const score = Math.ceil(vote_average * 10);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div>
          <h1>
            {title} ({year})
          </h1>
          <p>User score: {score}</p>
          <p>Overview: {overview}</p>
          <ul>
            Genres:{' '}
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Additional information</p>
          <li></li>
          <li></li>
        </div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
