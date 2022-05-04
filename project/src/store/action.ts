import {ActionType} from '../types/action';
import {Offer, CityType, Comment} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction(
  ActionType.ChangeCity,
  (city: CityType) => ({
    payload: city,
  }),
);

export const changeSorting = createAction(
  ActionType.ChangeSorting,
  (sorting: string)  => ({
    payload: sorting,
  }),
);

export const fillOffersList = createAction(
  ActionType.FillOffersList,
  (offerList: Offer[]) => ({
    payload: offerList,
  }),
);

export const fillNearbyList = createAction(
  ActionType.FillNearbyList,
  (offersList: Offer[]) => ({
    payload: offersList,
  }),
);

export const fillOffer = createAction(
  ActionType.FillOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

export const fillReviews = createAction(
  ActionType.FillReviews,
  (reviewsList: Comment[]) => ({
    payload: reviewsList,
  }),
);


export const fillFavorites = createAction(
  ActionType.FillFavorites,
  (offersList: Offer[]) => ({
    payload: offersList,
  }),
);

export const updateOffer = createAction(
  ActionType.UpdateOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

export const removeFromFavorites = createAction(
  ActionType.RemoveFromFavorites,
  (id: number) => ({
    payload: id,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
