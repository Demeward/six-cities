import Header from '../header/header';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import FavoritesContent from '../favorites-content/favorites-content';
import {fetchFavoritesAction} from '../../store/api-actions';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchFavoritesOffers() {
    dispatch(fetchFavoritesAction());
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Favorites({fetchFavoritesOffers}: PropsFromRedux): JSX.Element {

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

export default connector(Favorites);
