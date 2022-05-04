import Header from '../header/header';
import {useDispatch} from 'react-redux';
import FavoritesContent from '../favorites-content/favorites-content';
import {fetchFavoritesAction} from '../../store/api-actions';


function Favorites():JSX.Element {
  const dispatch = useDispatch();
  const fetchFavoritesOffers = () => {
    dispatch(fetchFavoritesAction());
  };

  fetchFavoritesOffers();

  return (
    <div className="page">
      <Header />

      <FavoritesContent />
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
