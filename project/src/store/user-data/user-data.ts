import {UserData} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NotAuth;
    });
});

export {userData};
