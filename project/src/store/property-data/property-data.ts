import {PropertyData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

const initialState: PropertyData = {
  offer: null,
  reviews: [],
  nearbyOffers: [],
};

const propertyData = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.FillOffer:
      return {...state, offer: action.payload};
    case ActionType.FillReviews:
      return {...state, reviews: action.payload};
    case ActionType.FillNearbyList:
      return {...state, nearbyOffers: action.payload};
    default: return state;
  }
};

export {propertyData};
