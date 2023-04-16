import { fetchingMovieReviews } from 'components/apiFetching/apiFetching';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getMovieReviews() {
      const reviewsData = await fetchingMovieReviews(movieId);
      setReviews(reviewsData.results);
    }
    getMovieReviews(movieId);
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  } else if (reviews.length === 0) {
    return (
      <div className={css.reviews__notFound}>
        Sorry, we don't have any reviews for this movie
      </div>
    );
  }

  return (
    <div className={css.reviews__container}>
      <ul className={css.reviews__list}>
        {reviews.map(review => (
          <li className={css.reviews__item} key={review.id}>
            <p>
              <b>Author: {review.author}</b>
            </p>
            {<div dangerouslySetInnerHTML={{ __html: review.content }}></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
