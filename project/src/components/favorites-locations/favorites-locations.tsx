import { Offer, CityType } from '../../types/offer';
import FavoritesList from '../favorites-list/favorites-list';
import {changeCity, redirectToRoute} from '../../store/action';
import {useDispatch} from 'react-redux';
import {AppRoute} from '../../const';
import {memo} from 'react';


type FavoritesTypeProps = {
  offers: Offer[],
}

function FavoritesLocations({offers}: FavoritesTypeProps):JSX.Element {
  const dispatch = useDispatch();
  const cityChangeHandler = (city: CityType) => {
    dispatch(changeCity(city));
  };
  const redirectToRoot = () => {
    dispatch(redirectToRoute(AppRoute.Main));
  };

  const cities = new Set(offers.map((offer) => offer.city.name));
  const uniqueCities = Array.from(cities);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {uniqueCities.map((city) => {
          const cityOffers = offers.filter((offer) => offer.city.name === city);
          return (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#"
                    onClick={() => {
                      cityChangeHandler(city);
                      redirectToRoot();
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesList offers={cityOffers} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default memo(FavoritesLocations);
