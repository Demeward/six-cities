import {Action, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
