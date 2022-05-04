import FavoritesLocations from '../favorites-locations/favorites-locations';
import NoFavorites from '../no-favorites-offers/no-favorites-offers';
import {getFavorites} from '../../store/favorites-data/selectors';
import {useSelector} from 'react-redux';


function FavoritesContent():JSX.Element {
  const favorites = useSelector(getFavorites);

  return (
    <main className={`page__main page__main--favorites ${favorites.length === 0 ? 'page__main--favorites-empty': ''}`}>
      <div className="page__favorites-container container">
        {favorites.length !== 0
          ? <FavoritesLocations offers={favorites} />
          : <NoFavorites />}
      </div>
    </main>
  );
}

export default FavoritesContent;
