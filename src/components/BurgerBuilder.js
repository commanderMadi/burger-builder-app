import React from 'react';
import { connect } from 'react-redux';
import IngredientsController from './IngredientsController';
import { Burger } from './Burger';
import Modal from './Modal';
import { Salad, Cheese, Meat, Bacon } from '../styles/components/Burger';
import { BurgerBuilderWrapper } from '../styles/components/BurgerBuilderWrapper';
import { NavLink } from 'react-router-dom';
class BurgerBuilder extends React.Component {
  state = {
    isModalShown: false,
    isCheckoutButtonDisabled: true
  };

  componentDidMount() {
    if (this.props.authenticated) {
      this.setState(() => ({ isCheckoutButtonDisabled: false }));
    }
  }

  showModal = () => {
    this.setState({ isModalShown: true });
  };
  handleProceedToCheckout = () => {
    this.props.history.push('/checkout');
  };
  handlecancelCheckout = () => {
    this.setState({ isModalShown: false });
  };

  render() {
    const { ingredients } = this.props;
    return (
      <BurgerBuilderWrapper>
        <Burger>
          {ingredients.meat > 0 && <Meat />}
          {ingredients.bacon > 0 && <Bacon />}
          {ingredients.salad > 0 && <Salad />}
          {ingredients.cheese > 0 && <Cheese />}
          {ingredients.meat > 1 && <Meat />}
        </Burger>
        <IngredientsController />
        <Modal
          isModalShown={this.state.isModalShown}
          totalPrice={this.props.totalPrice}
          handleProceedToCheckout={this.handleProceedToCheckout}
          handlecancelCheckout={this.handlecancelCheckout}
        />
        {this.props.authenticated && (
          <button disabled={this.state.isCheckoutButtonDisabled} onClick={this.showModal} className='checkout'>
            Checkout
          </button>
        )}
      </BurgerBuilderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    authenticated: state.auth.idToken
  };
};

export default connect(mapStateToProps)(BurgerBuilder);
