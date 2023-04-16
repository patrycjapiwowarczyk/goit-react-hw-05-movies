import { fetchingMovieCast } from 'components/apiFetching/apiFetching';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ImageNotFound from '../../images/clapper-2140602_1920.jpg';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getMovieCast() {
      const castData = await fetchingMovieCast(movieId);
      setCast(castData.cast);
    }
    getMovieCast(movieId);
  }, [movieId]);

  if (!cast) {
    return <div>Loading...</div>;
  } else if (cast.length === 0) {
    return <div className={css.cast__notFound}>Sorry, we don't have any information about the cast</div>;
  }

  return (
    <div className={css.cast__container}>
      <ul className={css.cast__list}>
        {cast.map(actor => (
          <li className={css.cast__item} key={actor.id}>
            <img
              className={css.cast__img}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : ImageNotFound
              }
              alt={actor.name}
              width="180px"
              height="270px"
            />
            <div className={css.cast__info}>
              <p>{<b>{actor.name}</b>}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
