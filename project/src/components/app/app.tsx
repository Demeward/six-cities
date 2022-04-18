import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NoPage from '../no-page/no-page';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import PropertyRoute from '../property-route/property-route';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import browserHistory from '../../browser-history';
import {getLoadedDataStatus, getOffers} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getLoadedDataStatus(state),
});

const connector = connect(mapStateToProps);

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(props: PropsFromRedux): JSX.Element {
  const {offers, authorizationStatus, isDataLoaded} = props;
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route
          path={'offer/:id'}
          element={<PropertyRoute offers={offers}/>}
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export {App};
export default connector(App);
