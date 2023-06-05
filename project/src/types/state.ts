import {CityType, OfferType, CommentsType, PropertyOffer, SortingType} from './offer';
import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';
import {store} from '../index.js';

export type MainData = {
  city: CityType,
  offers: OfferType,
  isDataLoaded: boolean,
  activeSorting: SortingType,
};

export type UserData = {
  authorizationStatus: AuthorizationStatus,
};

export type PropertyData = {
  offer: PropertyOffer,
  isOfferLoading: boolean,
  reviews: CommentsType,
  nearbyOffers: OfferType,
};

export type FavoritesData = {
  favorites: OfferType,
  areFavoritesLoaded: boolean,
}

export type State = RootState;

export type AppDispatch = typeof store.dispatch;
