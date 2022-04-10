import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {ThunkAppDispatch} from './types/action';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AuthorizationStatus} from './const';
import {requireAuthorization} from './store/action';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth)),
);

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api)),
  applyMiddleware(redirect),
));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
