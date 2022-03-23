import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NoPage from '../no-page/no-page';
// import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import PropertyRoute from '../property-route/property-route';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {State} from '../../types/state';
// import {Offer} from '../../types/offer';
import {connect, ConnectedProps} from 'react-redux';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

function App(props: PropsFromRedux): JSX.Element {
  // const {offers} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />}/>
        <Route
          path={'offer/:id'}
          element={<PropertyRoute />}
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
