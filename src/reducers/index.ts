import { combineReducers } from 'redux';
import { appReducer, appStoreSliceInterface } from './appReducer';

export interface StoreInterface {
  app: appStoreSliceInterface;
}

export const reducers = combineReducers<StoreInterface>({
  app: appReducer,
});
