import {State} from '../../types/state';
import {CityType, OfferType, SortingType} from '../../types/offer';
import {NameSpace} from '../root-reducer';

export const getCity = (state: State): CityType => state[NameSpace.main].city;
export const getOffers = (state: State): OfferType => state[NameSpace.main].offers;
export const getSorting = (state: State): SortingType => state[NameSpace.main].activeSorting;
export const getLoadedDataStatus = (state: State):boolean => state[NameSpace.main].isDataLoaded;
