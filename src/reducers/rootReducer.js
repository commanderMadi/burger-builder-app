import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { builderReducer } from './builderReducer';

export const rootReducer = combineReducers({ auth: authReducer, ingredients: builderReducer });
