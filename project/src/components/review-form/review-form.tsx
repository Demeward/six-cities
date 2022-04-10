import { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import RatingStar from '../rating-star/rating-star';
import { Rating } from '../../const';
import { postReviewAction } from '../../store/api-actions';
import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { CommentPost } from '../../types/offer';

const mapStateToProps = ({ offer }: State) => ({
  offer,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit({ comment, rating, id }: CommentPost) {
    dispatch(postReviewAction({ comment, rating, id }));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function ReviewForm({ offer, onSubmit }: PropsFromRedux): JSX.Element {
  const [reviewMessage, setReviewMessage] = useState<string>('');
  const [reviewRating, setReviewRating] = useState<number>(0);

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

  // eslint-disable-next-line no-console
  console.log(reviewMessage, reviewRating);
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

export default connector(ReviewForm);
