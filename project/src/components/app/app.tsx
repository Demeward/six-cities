import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NoPage from '../no-page/no-page';
// import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import PropertyRoute from '../property-route/property-route';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import {Offer} from '../../types/offer';

type AppOffersCount = {
  offers: Offer[],
}

function App({ offers }: AppOffersCount): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offers={offers}/>}/>
        <Route
          path={'offer/:id'}
          element={<PropertyRoute offers={offers}/>}
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
