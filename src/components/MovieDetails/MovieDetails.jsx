import React, { useEffect, useState } from 'react';
import { fetchingMovieDetails } from 'components/apiFetching/apiFetching';
import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';
import ImageNotFound from '../../images/clapper-2140602_1920.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const backLink = '/';

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
    <div className={css.movieDetails__container}>
      <div className={css.movieDetails}>
        <div className={css.movieDetails__img}>
          <img
            className={css.movieDetails__poster}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : ImageNotFound
            }
            alt={title}
          />
        </div>
        <div className={css.movieDetails__info}>
          <h1 className={css.movieDetails__title}>
            {title} ({year})
          </h1>
          <p>
            <b>User score:</b> {score}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <ul className={css.movieDetails__genres}>
            <b>Genres:</b>{' '}
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <b>Additional information:</b>
        <ul className={css.additionalInfo__list}>
          <li>
            <Link
              className={css.additionalInfo__item}
              to="cast"
              from={backLink}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={css.additionalInfo__item}
              to="reviews"
              from={backLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
