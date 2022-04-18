import {State} from '../../types/state';
import {Middleware} from '@reduxjs/toolkit';
import {ActionType} from '../../types/action';
import browserHistory from '../../browser-history';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
