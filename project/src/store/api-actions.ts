import { ThunkActionResult } from '../types/action';
import { APIRoute, AuthorizationStatus, AppRoute, toClientOffers, toClientOffer, toClientAuthInfo, toClientReviews } from '../const';
import { fillOffersList, fillOffer, fillNearbyList, fillReviews, requireAuthorization, requireLogout, redirectToRoute, fillFavorites, updateOffer, removeFromFavorites } from './action';
import { AuthData } from '../types/auth';
import { ServerOffer, ServerComment, CommentPost } from '../types/offer';
import { UserServerData } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { dropEmail, saveEmail } from '../services/email';
import { AxiosResponse } from 'axios';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<ServerOffer[]>(APIRoute.Offers);
    dispatch(fillOffersList(toClientOffers(data)));
  };

export const fetchNearbyOffersAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<ServerOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(fillNearbyList(toClientOffers(data)));
  };


export const fetchOfferAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<ServerOffer>(`${APIRoute.Offers}/${id}`);
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(fillOffer(toClientOffer(data)));
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<ServerComment[]>(`${APIRoute.Comments}/${id}`);
    // eslint-disable-next-line no-console
    console.log(data);
    dispatch(fillReviews(toClientReviews(data)));
  };

export const fetchFavoritesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<ServerOffer[]>(APIRoute.Favorite);
    dispatch(fillFavorites(toClientOffers(data)));
  };

export const addToFavoritesAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<ServerOffer>(`${APIRoute.Favorite}/${id}/1`);
    dispatch(updateOffer(toClientOffer(data)));
  };

export const removeFromFavoritesAction = (id:number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<ServerOffer>(`${APIRoute.Favorite}/${id}/0`);
    dispatch(updateOffer(toClientOffer(data)));
    dispatch(removeFromFavorites(id));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then((response: AxiosResponse<UserServerData>) => {
        response.data === undefined
          ? dispatch(requireAuthorization(AuthorizationStatus.NotAuth))
          : dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.post<UserServerData>(APIRoute.Login, { email, password });
    // eslint-disable-next-line no-console
    console.log(data);
    const adaptedAuthInfo = toClientAuthInfo(data);
    // eslint-disable-next-line no-console
    console.log(adaptedAuthInfo);
    saveToken(adaptedAuthInfo.token);
    saveEmail(adaptedAuthInfo.email);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchOffersAction());
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dropEmail();
    dispatch(requireLogout());
    dispatch(fetchOffersAction());
  };

export const postReviewAction = ({comment, rating, id}:CommentPost):ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<ServerComment[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(fillReviews(
      toClientReviews(data)),
    );
  };
