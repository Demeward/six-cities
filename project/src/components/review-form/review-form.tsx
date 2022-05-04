import { useState, ChangeEvent, FormEvent } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RatingStar from '../rating-star/rating-star';
import { Rating } from '../../const';
import { postReviewAction } from '../../store/api-actions';
import { CommentPost } from '../../types/offer';
import {getOffer} from '../../store/property-data/selectors';


function ReviewForm():JSX.Element {
  const offer = useSelector(getOffer);
  const dispatch = useDispatch();
  const [reviewMessage, setReviewMessage] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(0);

  const onSubmit = ({comment, rating, id}: CommentPost) => {
    dispatch(postReviewAction({comment, rating, id}));
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setReviewRating(parseInt(evt.target.value, 10));

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      comment: reviewMessage,
      rating: reviewRating,
      id: offer?.id,
    });
    setReviewRating(0);
    setReviewMessage('');
  };

  const isReviewValid = (comment:string, rating: number):boolean => (comment.length > 50 && comment.length < 300) && rating !== 0;

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(Rating).map(([key, value]) => (
          <RatingStar
            key={value}
            rating={value}
            ratingName={key}
            reviewRating={reviewRating}
            onChange={handleRatingChange}
          />),
        )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewMessage}
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setReviewMessage(target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewValid(reviewMessage, reviewRating)}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
