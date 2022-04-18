import FavoritesLocations from '../favorites-locations/favorites-locations';
import NoFavorites from '../no-favorites-offers/no-favorites-offers';
import {State} from '../../types/state';
import {getFavorites} from '../../store/favorites-data/selectors';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = (state: State) => ({
  favorites: getFavorites(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function FavoritesContent(props: PropsFromRedux):JSX.Element {
  const {favorites} = props;

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

export {FavoritesContent};
export default connector(FavoritesContent);
