import {ActionType} from '../types/action';
import {Offer} from '../types/offer';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSorting = (sorting: string) => ({
  type: ActionType.ChangeSorting,
  payload: sorting,
} as const);

export const fillOffersList = (offersList: Offer[]) => ({
  type: ActionType.FillOffersList,
  payload: offersList,
} as const);

export const resetMainScreen = () => ({
  type: ActionType.ResetMainScreen,
} as const);
