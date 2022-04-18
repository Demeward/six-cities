import { Offer, CityType } from '../../types/offer';
import FavoritesList from '../favorites-list/favorites-list';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action';
import {changeCity, redirectToRoute} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';


type FavoritesTypeProps = {
  offers: Offer[],
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  cityChangeHandler(city: CityType) {
    dispatch(changeCity(city));
  },
  redirectToRoot() {
    dispatch(redirectToRoute(AppRoute.Main));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = FavoritesTypeProps & PropsFromRedux;

function FavoritesLocations({offers, cityChangeHandler, redirectToRoot}:ConnectedComponentProps): JSX.Element {

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

export {FavoritesLocations};
export default connector(FavoritesLocations);
