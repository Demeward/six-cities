import {CityType, OfferType, CommentsType, PropertyOffer, SortingType} from './offer';
import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

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
  reviews: CommentsType,
  nearbyOffers: OfferType,
};

export type FavoritesData = {
  favorites: OfferType
}

export type State = RootState;
