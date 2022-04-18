import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import React from 'react';
import {State} from '../../types/state';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Actions, ThunkAppDispatch} from '../../types/action';
import {addToFavoritesAction, checkAuthAction, removeFromFavoritesAction} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {Dispatch} from '@reduxjs/toolkit';

type OfferTypeProps = {
  offer: Offer,
  onActiveOfferChange: (value: Offer | null) => void,
}

const mapStateToProps = (state: State) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch | Dispatch<Actions>) => ({
  addToFavorites(id: number) {
    (dispatch as ThunkAppDispatch)(addToFavoritesAction(id));
  },
  removeFromFavorites(id: number) {
    (dispatch as ThunkAppDispatch)(removeFromFavoritesAction(id));
  },
  redirectToAuthScreen() {
    (dispatch as Dispatch<Actions>)(redirectToRoute(AppRoute.Login));
  },
  checkAuthorization() {
    (dispatch as ThunkAppDispatch)(checkAuthAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = OfferTypeProps & PropsFromRedux;


function OfferCard(props: ConnectedComponentProps): JSX.Element {
  const {offer, onActiveOfferChange} = props;
  const {authorizationStatus, addToFavorites, removeFromFavorites, redirectToAuthScreen, checkAuthorization} = props;
  const {id, isPremium, isFavorite, previewImage, price, rating, title, type} = offer;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {onActiveOfferChange(offer);
      }}
      onMouseLeave={() => onActiveOfferChange(null)}
    >
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button"
            onClick={(evt) => {
              evt.preventDefault();
              checkAuthorization();
              if (authorizationStatus !== AuthorizationStatus.Auth) {
                return redirectToAuthScreen();
              }
              if (isFavorite) {
                return removeFromFavorites(id);
              }
              return addToFavorites(id);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {OfferCard};
export default connector(React.memo(OfferCard,
  (prevProps, nextProps) => prevProps.offer === nextProps.offer));
