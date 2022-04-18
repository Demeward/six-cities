import {FavoritesData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

const initialState: FavoritesData = {
  favorites: [],
};

const favoritesData = (state = initialState, action: Actions): FavoritesData => {
  let index = -1;
  switch (action.type) {
    case ActionType.FillFavorites:
      return {...state, favorites: action.payload};
    case ActionType.RemoveFromFavorites:
      index = state.favorites.findIndex((offer) => offer.id === action.payload);
      return {...state, favorites: [
        ...state.favorites.slice(0, index),
        ...state.favorites.slice(index + 1),
      ],
      };
    default:
      return state;
  }
};

export {favoritesData};
