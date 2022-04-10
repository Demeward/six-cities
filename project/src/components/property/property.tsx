import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
// import { Offer, OfferType, PropertyOffer } from '../../types/offer';
import Map from '../map/map';
import Loader from '../loader/loader';
import { AuthorizationStatus } from '../../const';
import PropertyPhotos from '../property-photos/property-photos';
import PropertyFeatures from '../property-features/property-features';
import NearbyOffers from '../nearby-offers/nearby-offers';
// import {Actions, ThunkAppDispatch} from '../../types/action';
// import {Dispatch} from '@reduxjs/toolkit';
// import {fetchOfferAction, fetchNearbyOffersAction, fetchReviewsAction} from '../../store/api-actions';
// import {fillOffer} from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';


const mapStateToProps = ({ offer, nearbyOffers, reviews, authorizationStatus }: State) => ({
  offer,
  nearbyOffers,
  authorizationStatus,
  reviews,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Property(props: PropsFromRedux): JSX.Element {
  const { offer, nearbyOffers, reviews, authorizationStatus } = props;

  if (offer === null) {
    return <Loader />;
  }

  const offersMap = [...nearbyOffers, offer];
  const { isPremium, rating, price, isFavorite, title, type, bedrooms, description, goods, host, maxAdults, images } = offer;

  return (
    <>
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <PropertyPhotos images={images} />
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={isPremium ? 'property__mark' : 'visually-hidden'}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite ? 'property__bookmark-button--active' : ''} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyFeatures goods={goods} />
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                {reviews.length !== 0
                  ? <ReviewsList reviews={reviews} />
                  : ''}
                {authorizationStatus === AuthorizationStatus.Auth
                  ? <ReviewForm />
                  : ''}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offersMap} activeOffer={offer} />
          </section>
        </section>
        <div className="container">
          <NearbyOffers nearbyOffers={nearbyOffers} />
        </div>
      </main>
    </>
  );
}

export default connector(Property);
