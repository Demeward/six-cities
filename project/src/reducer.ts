import {City, Sorting} from './const';
import {State} from './types/state';
import {Actions, ActionType} from './types/action';


const initialState = {
  city: City.Paris,
  offers: [],
  activeSorting: Sorting.Popular,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSorting:
      return {...state, activeSorting: action.payload};
    case ActionType.FillOffersList:
      return {...state, offers: action.payload};
    case ActionType.ResetMainScreen:
      return {...initialState};
    default: return state;
  }
};

export {reducer};
