import React from 'react';
import { AuthenticationForm } from '../components/styles/AuthenticationForm';
import { connect } from 'react-redux';
import { auth } from '../actions/auth';
import { FormWrapper } from '../components/styles/FormWrapper';

export class Auth extends React.Component {
  state = {
    error: null,
    currentSrc: 'login',
    nextSrc: 'register'
  };
  render() {
    return (
      <FormWrapper>
        {this.state.error && <p>{this.state.error}</p>}
        <AuthenticationForm onSubmit={this.handleSubmit}>
          <label htmlFor='useremail'>Email</label>
          <input type='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' />
          <button>{this.state.currentSrc}</button>
          <button type='button' onClick={this.changeSrc}>
            Switch to {this.state.nextSrc} Page.
          </button>
        </AuthenticationForm>
      </FormWrapper>
    );
  }

  changeSrc = prevState => {
    if (prevState.currentSrc !== this.state.nextSrc) {
      this.setState(() => ({ currentSrc: this.state.nextSrc, nextSrc: this.state.currentSrc }));
    }
  };

  routeLogic = (url, useremail, password) => {
    const { auth, history } = this.props;
    auth(url, useremail, password).then(res => {
      if (res.idToken && typeof res.idToken !== 'object') {
        console.log('I am in!');
        history.push('/burgerbuilder');
      } else {
        this.setState(() => ({ error: res.errorObject.response.data.error.message }));
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const [useremail, password] = e.target.elements;
    console.log(useremail.value, password.value);
    if (this.state.currentSrc === 'login') {
      this.routeLogic(`${process.env.REACT_APP_BASE_URL}verifyPassword?key=${process.env.REACT_APP_EP_KEY}`, useremail.value, password.value);
    } else if (this.state.currentSrc === 'register') {
      this.routeLogic(`${process.env.REACT_APP_BASE_URL}signupNewUser?key=${process.env.REACT_APP_EP_KEY}`, useremail.value, password.value);
    }
  };
}

const mapStateToProps = state => {
  return {
    idToken: state.idToken,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { auth })(Auth);
