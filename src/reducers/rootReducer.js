import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { builderReducer } from './builderReducer';
import { priceReducer } from './priceReducer';

export const rootReducer = combineReducers({ auth: authReducer, ingredients: builderReducer, totalPrice: priceReducer });
