import {City, Sorting, AuthorizationStatus} from './const';
import {State} from './types/state';
import {Actions, ActionType} from './types/action';


const initialState = {
  city: City.Paris,
  offers: [],
  nearbyOffers: [],
  offer: null,
  reviews: [],
  activeSorting: Sorting.Popular,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSorting:
      return {...state, activeSorting: action.payload};
    case ActionType.FillOffersList:
      return {...state, offers: action.payload};
    case ActionType.FillOffer:
      return {...state, offer: action.payload};
    case ActionType.FillReviews:
      return {...state, reviews: action.payload};
    case ActionType.FillNearbyList:
      return {...state, nearbyOffers: action.payload};
    case ActionType.ResetMainScreen:
      return {...initialState};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NotAuth};
    default: return state;
  }
};

export {reducer};
