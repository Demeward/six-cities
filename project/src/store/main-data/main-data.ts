import {MainData} from '../../types/state';
import {City, Sorting} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSorting, fillOffersList, updateOffer} from '../action';

const initialState: MainData = {
  city: City.Paris,
  offers: [],
  isDataLoaded: false,
  activeSorting: Sorting.Popular,
};

const mainData = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  })
    .addCase(changeSorting, (state, action) => {
      state.activeSorting = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1),
      ];
    });
});

export {mainData};
