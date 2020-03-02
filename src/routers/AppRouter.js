import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import BurgerBuilder from '../components/BurgerBuilder';
import { requireAuth, publicRoute } from '../components/AuthHoc';
import Orders from '../components/Orders';
import Auth from '../components/Auth';
import Checkout from '../components/Checkout';
import { GlobalStyle } from '../styles/components/GlobalStyle';

export const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/orders' component={requireAuth(Orders)} />
          <Route path='/checkout' component={requireAuth(Checkout)} />
          <Route path='/auth' component={publicRoute(Auth)} />
        </Switch>
      </div>
    </Router>
  );
};
