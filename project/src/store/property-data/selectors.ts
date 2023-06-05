import {State} from '../../types/state';
import {OfferType, PropertyOffer, CommentsType} from '../../types/offer';
import {NameSpace} from '../root-reducer';

export const getOffer = (state: State): PropertyOffer => state[NameSpace.property].offer;
export const getOfferLoading = (state: State): boolean => state[NameSpace.property].isOfferLoading;
export const getReviews = (state: State): CommentsType => state[NameSpace.property].reviews;
export const getNearbyOffers = (state: State): OfferType => state[NameSpace.property].nearbyOffers;
