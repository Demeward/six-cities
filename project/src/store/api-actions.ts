// import { ThunkActionResult} from '../types/action';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppRoute, APIRoute, AuthorizationStatus} from '../const';
import { fillOffersList, fillOffer, fillNearbyList, fillReviews, requireAuthorization, requireLogout, fillFavorites, updateOffer, removeFromFavorites, redirectToRoute } from './action';
import { AuthData } from '../types/auth';
import { CommentPost, Offer } from '../types/offer';
import { UserServerData } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { dropEmail, saveEmail } from '../services/email';
import { AxiosResponse } from 'axios';
import request from 'axios';
import {generatePath} from 'react-router';
import {AxiosInstance} from 'axios';
import {State, AppDispatch} from '../types/state';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/fetchOffers', async (_arg, {dispatch, extra: api}) => {
  try {
    const { data } = await api.get(APIRoute.Offers);
    dispatch(fillOffersList(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/fetchNearbyOffers', async (offerId, {dispatch, extra: api}) => {
  try {
    const { data } = await api.get(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(fillNearbyList(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});


export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/fetchOffer', async (offerId, {dispatch, extra: api}) => {
  try {
    const { data } = await api.get(`${APIRoute.Offers}/${offerId}`);
    dispatch(fillOffer(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
    dispatch(redirectToRoute(AppRoute.NoPage));
  }
});

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/fetchReviews', async (offerId, {dispatch, extra: api}) => {
  try {
    const { data } = await api.get(`${APIRoute.Comments}/${offerId}`);
    dispatch(fillReviews(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/fetchFavorites', async (_arg, {dispatch, extra: api}) => {
  try {
    const { data } = await api.get(`${APIRoute.Favorite}`);
    dispatch(fillFavorites(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});


export const addToFavoritesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/addToFavorites', async (offerId, {dispatch, extra: api}) => {
  try {
    const { data } = await api.post(`${APIRoute.Favorite}/${offerId}/${1}`);
    dispatch(updateOffer(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});

export const changeFavoriteAction = createAsyncThunk<void, Offer, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/changeFavorite', async (offer, {dispatch, extra: api}) => {
  const favoriteStatus = offer.isFavorite;
  try {
    const { data } = await api.post<Offer>(generatePath(APIRoute.FavoritePlace, {id: `${offer.id}`, status: `${favoriteStatus ? 0 : 1}` }), offer);
    dispatch(updateOffer(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});


export const removeFromFavoritesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('offer/removeFromFavorites', async (offerId, {dispatch, extra: api}) => {
  try {
    const { data } = await api.post(`${APIRoute.Favorite}/${offerId}/${0}`);
    dispatch(updateOffer(data));
    dispatch(removeFromFavorites(offerId));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('user/checkAuth', async (_arg, {dispatch, extra: api}) => {
  try {
    await api.get(APIRoute.Login)
      .then((response: AxiosResponse<UserServerData>) => {
        response.data === undefined
          ? dispatch(requireAuthorization(AuthorizationStatus.NotAuth))
          : dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
    dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
  }
});

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('user/login', async ({login: email, password}, {dispatch, extra: api}) => {
  try {
    const { data } = await api.post<UserServerData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    saveEmail(data.email);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(fetchOffersAction());
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
    dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
  }
});

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('user/logout', async (_arg, {dispatch, extra: api}) => {
  try {
    api.delete(APIRoute.Logout);
    dropToken();
    dropEmail();
    dispatch(requireLogout());
    dispatch(fetchOffersAction());
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});

export const postReviewAction = createAsyncThunk<void, CommentPost, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>('comment/postReview', async ({comment, rating, id}, {dispatch, extra: api}) => {
  try {
    const { data } = await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(fillReviews(data));
  } catch (error) {
    if (!request.isAxiosError(error)) {
      throw error;
    }
  }
});
