import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { builderReducer } from './builderReducer';
import { priceReducer } from './priceReducer';
import { ordersReducer } from './ordersReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    ingredients: builderReducer,
    totalPrice: priceReducer,
    orders: ordersReducer
});
