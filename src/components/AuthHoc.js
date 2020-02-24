import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const requireAuth = CurrentComponent => {
  class Authenticate extends React.Component {
    render() {
      console.log('require auth props', this.props);
      return !this.props.auth.idToken ? <Redirect to='/auth' /> : <CurrentComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => {
    console.log(state);
    return {
      auth: state.auth
    };
  };
  return connect(mapStateToProps)(Authenticate);
};

export const publicRoute = CurrentComponent => {
  class PublicRoute extends React.Component {
    render() {
      return !this.props.auth.idToken ? <CurrentComponent {...this.props} /> : <Redirect to='/' />;
    }
  }

  const mapStateToProps = state => {
    console.log(state);
    return {
      auth: state.auth
    };
  };
  return connect(mapStateToProps)(PublicRoute);
};
