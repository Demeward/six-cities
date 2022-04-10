import {ActionType} from '../types/action';
import {Offer, Comment} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSorting = (sorting: string) => ({
  type: ActionType.ChangeSorting,
  payload: sorting,
} as const);

export const fillOffersList = (offersList: Offer[]) => ({
  type: ActionType.FillOffersList,
  payload: offersList,
} as const);

export const fillNearbyList = (offers: Offer[]) => ({
  type: ActionType.FillNearbyList,
  payload: offers,
} as const);

export const fillOffer = (offer: Offer) => ({
  type: ActionType.FillOffer,
  payload: offer,
} as const);

export const fillReviews = (reviews: Comment[]) => ({
  type: ActionType.FillReviews,
  payload: reviews,
} as const);

export const resetMainScreen = () => ({
  type: ActionType.ResetMainScreen,
} as const);


export const  requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
