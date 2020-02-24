import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { App } from '../components/App';
import Header from '../components/Header';
import  {Burger} from '../components/Burger';
import { requireAuth, publicRoute } from '../components/AuthHoc';
import { Orders } from '../components/Orders';
import Auth from '../components/Auth';
import { GlobalStyle } from '../components/styles/GlobalStyle';

export const AppRouter = () => {
  return (
    <Router>
      <GlobalStyle />
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/burgerbuilder' component={Burger} />
          <Route path='/orders' component={requireAuth(Orders)} />
          <Route path='/auth' component={publicRoute(Auth)} />
        </Switch>
      </div>
    </Router>
  );
};
