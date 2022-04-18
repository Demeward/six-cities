import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

export const getFavorites = (state: State) => state[NameSpace.favorites].favorites;
