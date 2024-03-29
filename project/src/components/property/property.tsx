import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import Loader from '../loader/loader';
import { AppRoute, AuthorizationStatus } from '../../const';
import PropertyPhotos from '../property-photos/property-photos';
import PropertyFeatures from '../property-features/property-features';
import NearbyOffers from '../nearby-offers/nearby-offers';
// import { Offer } from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../types/action';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getOffer, getNearbyOffers, getReviews } from '../../store/property-data/selectors';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { addToFavoritesAction, checkAuthAction, removeFromFavoritesAction, fetchOfferAction, fetchNearbyOffersAction, fetchReviewsAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import React from 'react';


function Property(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);
  const currentOffer = useAppSelector(getOffer);
  // const isOfferLoading = useSelector(getOfferLoading);
  const reviews = useAppSelector(getReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const addToFavorites = (offerId: number) => {
    dispatch(addToFavoritesAction(offerId))
      .then(() => dispatch(fetchOfferAction(offerId)));
  };

  const removeFromFavorites = (offerId: number) => {
    dispatch(removeFromFavoritesAction(offerId))
      .then(() => dispatch(fetchOfferAction(offerId)));
  };

  const redirectToAuthScreen = () => {
    dispatch(redirectToRoute(AppRoute.Login));
  };

  const checkAuthorization = () => {
    dispatch(checkAuthAction());
  };

  useEffect(() => {
    if(currentOffer === null || currentOffer.id !== currentId) {
      dispatch(fetchOfferAction(currentId));
      dispatch(fetchNearbyOffersAction(currentId));
    }
  }, [currentOffer, currentId, dispatch]);

  useEffect(() => {
    if (currentOffer === null || currentOffer.id !== currentId) {
      dispatch(fetchReviewsAction(currentId));
    }
  }, [reviews, dispatch, currentId, currentOffer]);


  if (!currentOffer || currentOffer.id !== currentId) {
    return (
      <Loader />
    );
  }

  const nearbyProps = {
    nearby: nearbyOffers,
    offerId: currentId,
  };

  const reviewProps = {
    offerId: currentId,
  };

  const offersMap = [...nearbyOffers, currentOffer];
  const { isPremium, rating, price, isFavorite, title, type, bedrooms, description, goods, host, maxAdults, images } = currentOffer;

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
                <button className={`property__bookmark-button ${isFavorite && authorizationStatus === AuthorizationStatus.Auth ? 'property__bookmark-button--active' : ''} button`} type="button"
                  onClick={(evt) => {
                    evt.preventDefault();
                    checkAuthorization();
                    if (authorizationStatus !== AuthorizationStatus.Auth) {
                      return redirectToAuthScreen();
                    }
                    if (isFavorite) {
                      return removeFromFavorites(currentId);
                    }
                    return addToFavorites(currentId);
                  }}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }}></span>
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
                  ? <ReviewForm {...reviewProps} />
                  : ''}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offersMap} activeOffer={currentOffer} />
          </section>
        </section>
        <div className="container">
          <NearbyOffers {...nearbyProps}/>
        </div>
      </main>
    </>
  );
}

export default React.memo(Property);
