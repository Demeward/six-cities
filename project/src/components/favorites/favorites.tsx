import Header from '../header/header';
import FavoritesContent from '../favorites-content/favorites-content';
import {getFavoritesStatus} from '../../store/favorites-data/selectors';
import Loader from '../loader/loader';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../types/action';
import {fetchFavoritesAction} from '../../store/api-actions';


function Favorites():JSX.Element {
  const dispatch = useAppDispatch();
  const areFavoritesLoaded = useAppSelector(getFavoritesStatus);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if(!areFavoritesLoaded) {
    return <Loader />;
  }

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
