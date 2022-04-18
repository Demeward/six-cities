import {MainData} from '../../types/state';
import {City, Sorting} from '../../const';
import {Actions, ActionType} from '../../types/action';

const initialState: MainData = {
  city: City.Paris,
  offers: [],
  isDataLoaded: false,
  activeSorting: Sorting.Popular,
};

const mainData = (state = initialState, action:Actions): MainData => {
  let index = -1;
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.FillOffersList:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.ChangeSorting:
      return {...state, activeSorting: action.payload};
    case ActionType.UpdateOffer:
      index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      return {...state, offers: [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1),
      ],
      };
    default:
      return state;
  }
};

export {mainData};
