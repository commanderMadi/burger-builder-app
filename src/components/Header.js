import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import logo from '../assets/burger-logo.png';
import { StyledHeader } from './styles/StyledHeader';

export const Header = ({ auth, logout }) => {
  const { idToken } = auth;
  return (
    <StyledHeader>
      <img id='logo' alt='app logo' src={logo} />
      <ul>
        <li>
          <NavLink to='/burgerbuilder'>Burger Builder</NavLink>
        </li>
        <li>
          <NavLink to='/orders'>My Orders</NavLink>
        </li>
        {!idToken && (
          <li>
            <NavLink to='/auth'>Authenticate</NavLink>
          </li>
        )}
        {idToken && (
          <li>
            {' '}
            <a href='/' onClick={logout}>
              Logout
            </a>
          </li>
        )}
      </ul>
    </StyledHeader>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(Header);
