import { Offer, CityType } from '../../types/offer';
import FavoritesList from '../favorites-list/favorites-list';


type FavoritesType = {
  offers: Offer[],
}

function FavoritesLocations({ offers }: FavoritesType): JSX.Element {

  const cities = new Set<CityType>();
  offers.map((offer) => cities.add(offer.city.name));
  const citiesArr = Array.from(cities);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesArr.map((city) => {
          const cityOffers = offers.filter((offer) => offer.city.name === city);
          return (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
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

export default FavoritesLocations;
