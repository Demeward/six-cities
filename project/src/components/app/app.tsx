import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NoPage from '../no-page/no-page';
import Loader from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import Property from '../property/property';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector} from '../../types/action';
import browserHistory from '../../browser-history';
import {getLoadedDataStatus} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user-data/selectors';


const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  // const offers = useSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loader />
    );
  } else {
    return (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />}/>
          <Route
            path={'offer/:id'}
            element={<Property />}
          />
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.NoPage} element={<NoPage/>}/>
        </Routes>
      </HistoryRouter>
    );
  }
}

export default App;
