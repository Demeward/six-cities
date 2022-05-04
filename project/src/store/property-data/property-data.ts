import {PropertyData} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {fillNearbyList, fillOffer, fillReviews} from '../action';

const initialState: PropertyData = {
  offer: null,
  reviews: [],
  nearbyOffers: [],
};

const propertyData = createReducer(initialState, (builder) => {
  builder
    .addCase(fillOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(fillReviews, (state, action) => {
      state.reviews= action.payload;
    })
    .addCase(fillNearbyList, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});

export {propertyData};
