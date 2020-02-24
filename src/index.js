import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { rootReducer } from './reducers/rootReducer';
import { saveState, loadState } from './storage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  })
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('#root')
);
