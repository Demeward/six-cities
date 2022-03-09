import {Comment} from '../../types/offer';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: Comment[];
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review} />)}
    </ul>
  );
}

export default ReviewsList;
