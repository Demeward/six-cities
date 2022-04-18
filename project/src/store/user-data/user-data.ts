import {UserData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {AuthorizationStatus} from '../../const';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userData = (state = initialState, action: Actions): UserData => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NotAuth};
    default:
      return state;
  }
};

export {userData};
