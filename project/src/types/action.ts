import {changeCity, changeSorting, fillOffersList, fillOffer, fillNearbyList, fillReviews, requireAuthorization, requireLogout, redirectToRoute, updateOffer, fillFavorites, removeFromFavorites} from '../store/action';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillOffersList = 'main/fillOffersList',
  FillOffer = 'property/fillOffer',
  FillNearbyList = 'property/fillNearbyList',
  FillReviews = 'property/fillReviews',
  ChangeSorting = 'main/changeSorting',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',
  FillFavorites = 'favorites/fillFavorites',
  RemoveFromFavorites = 'favorites/removeFromFavorites',
  UpdateOffer = 'main/updateOffer',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillOffersList>
  | ReturnType<typeof fillOffer>
  | ReturnType<typeof fillNearbyList>
  | ReturnType<typeof fillReviews>
  | ReturnType<typeof changeSorting>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof fillFavorites>
  | ReturnType<typeof removeFromFavorites>
  | ReturnType<typeof updateOffer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
