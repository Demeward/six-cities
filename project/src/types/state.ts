import {CityType, OfferType, SortingType} from './offer';

export type State = {
  city: CityType,
  offers: OfferType,
  activeSorting: SortingType,
}
