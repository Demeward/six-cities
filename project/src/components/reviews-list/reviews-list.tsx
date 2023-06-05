import {Comment} from '../../types/offer';
import Review from '../review/review';
import React from 'react';

type ReviewsListProps = {
  reviews: Comment[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  // eslint-disable-next-line no-console
  console.log('lol');
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
  );
}

export default React.memo(ReviewsList, (prevProps, nextProps) => prevProps.reviews === nextProps.reviews);
