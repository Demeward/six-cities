import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NoPage from '../no-page/no-page';
import Loader from '../loader/loader';
// import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import PropertyRoute from '../property-route/property-route';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {State} from '../../types/state';
// import {Offer} from '../../types/offer';
import {connect, ConnectedProps} from 'react-redux';
import browserHistory from '../../browser-history';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({offers, authorizationStatus, isDataLoaded}: State) => ({
  offers,
  authorizationStatus,
  isDataLoaded,
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
