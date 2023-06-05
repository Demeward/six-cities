import {FavoritesData} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {fillFavorites, removeFromFavorites} from '../action';

const initialState: FavoritesData = {
  favorites: [],
  areFavoritesLoaded: false,
};

const favoritesData = createReducer(initialState, (builder) => {
  builder.addCase(fillFavorites, (state, action) => {
    state.favorites = action.payload;
    state.areFavoritesLoaded = true;
  })
    .addCase(removeFromFavorites, (state, action) => {
      const index = state.favorites.findIndex((offer) => offer.id === action.payload);

      state.favorites = [
        ...state.favorites.slice(0, index),
        ...state.favorites.slice(index + 1),
      ];
    });
});

export {favoritesData};
