
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavoritesAction, checkAuthAction, removeFromFavoritesAction} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';

type NearbyOferCardProps = {
  offer: Offer
}

function NearbyOfferCard({offer}: NearbyOferCardProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const {id, isPremium, previewImage, price, isFavorite, title, type, rating} = offer;
  const dispatch = useDispatch();

  const addToFavorites = (offerid: number) => {
    dispatch(addToFavoritesAction(offerid));
  };

  const removeFromFavorites = (offerid: number) => {
    dispatch(removeFromFavoritesAction(offerid));
  };

  const redirectToAuthScreen = () => {
    dispatch(redirectToRoute(AppRoute.Login));
  };

  const checkAuthorization = () => {
    dispatch(checkAuthAction());
  };

  return (
    <article className="near-places__card place-card">
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
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
export default NearbyOfferCard;
