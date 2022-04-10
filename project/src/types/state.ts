import {CityType, OfferType, CommentsType, PropertyOffer, SortingType} from './offer';
import {AuthorizationStatus} from '../const';

export type State = {
  city: CityType,
  offers: OfferType,
  reviews: CommentsType,
  nearbyOffers: OfferType,
  offer: PropertyOffer,
  activeSorting: SortingType,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
}
