// import {Action, ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
// import {AxiosInstance} from 'axios';
import {State, AppDispatch} from './state';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

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
  CheckIfauthStatusChanged = 'user/checkIfauthStatusChanged',
}


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
