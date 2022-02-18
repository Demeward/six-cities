import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NoPage from '../no-page/no-page';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppOffersCount = {
  offersCount: number;
}

function App({ offersCount }: AppOffersCount): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage offersCount={offersCount}/>}/>
        <Route path={AppRoute.Room} element={<Property/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NotAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
