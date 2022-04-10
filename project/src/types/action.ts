import {changeCity, changeSorting, fillOffersList, fillOffer, fillNearbyList, fillReviews, resetMainScreen, requireAuthorization, requireLogout, redirectToRoute} from '../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillOffersList = 'main/fillOffersList',
  FillOffer = 'property/fillOffer',
  FillNearbyList = 'property/fillNearbyList',
  FillReviews = 'property/fillReviews',
  ResetMainScreen = 'main/reset',
  ChangeSorting = 'main/changeSorting',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillOffersList>
  | ReturnType<typeof fillOffer>
  | ReturnType<typeof fillNearbyList>
  | ReturnType<typeof fillReviews>
  | ReturnType<typeof resetMainScreen>
  | ReturnType<typeof changeSorting>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
