import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import logo from '../assets/burger-logo.png';
import { StyledHeader } from '../styles/components/StyledHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export class Header extends React.Component {
  state = {
    id: ''
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  toggleNavbar = id => {
    this.setState(prevState => ({ id: prevState.id !== id ? id : 'side_menu_hidden' }));
  };

  render() {
    const { idToken } = this.props.auth;

    return (
      <StyledHeader>
        <FontAwesomeIcon onClick={() => this.toggleNavbar('side_menu_shown')} className='navbar__toggle' icon={faBars} />
        <img id='logo' alt='app logo' src={logo} />

        <ul ref={this.setWrapperRef} id={this.state.id}>
          <li>
            <NavLink to='/'>Burger Builder</NavLink>
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
              <a href='/' onClick={this.props.logout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </StyledHeader>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(Header);
