import {combineReducers} from '@reduxjs/toolkit';
import {mainData} from './main-data/main-data';
import {propertyData} from './property-data/property-data';
import {userData} from './user-data/user-data';
import {favoritesData} from './favorites-data/favorites-data';

export enum NameSpace {
  main = 'MAIN',
  property = 'PROPERTY',
  user = 'USER',
  favorites = 'FAVORITES'
}

export const rootReducer = combineReducers({
  [NameSpace.main]: mainData,
  [NameSpace.property]: propertyData,
  [NameSpace.user]: userData,
  [NameSpace.favorites]: favoritesData,
});

export type RootState = ReturnType<typeof rootReducer>;
