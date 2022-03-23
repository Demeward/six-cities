import {changeCity, changeSorting, fillOffersList, resetMainScreen} from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  FillOffersList = 'main/fillOffersList',
  ResetMainScreen = 'main/reset',
  ChangeSorting = 'main/changeSorting'
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillOffersList>
  | ReturnType<typeof resetMainScreen>
  | ReturnType<typeof changeSorting>;
