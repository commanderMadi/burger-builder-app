import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addIngredients, removeIngredients, resetIngredients } from '../actions/builder';
import { updateTotalPrice, resetTotalPrice } from '../actions/price';

class IngredientsController extends React.Component {
  state = {
    meat_price: 5,
    bacon_price: 3,
    cheese_price: 2,
    salad_price: 1,
    isDisabled: true
  };

  componentDidMount() {
    if (this.props.authenticated) {
      this.setState(() => ({ isDisabled: false }));
    }
    if (!this.props.authenticated) {
      this.props.resetIngredients();
      this.props.resetTotalPrice();
    }
  }

  addToPrice = (state, ingredientName) => {
    for (let key in state) {
      const splitted = key.split('_');
      if (splitted[0] === ingredientName) {
        return this.setState({ totalPrice: this.props.totalPrice + state[key] }, () => {
          this.props.updateTotalPrice(this.state.totalPrice);
        });
      }
    }
  };

  subtractFromPrice = (state, ingredientName) => {
    for (let key in state) {
      const splitted = key.split('_');
      if (splitted[0] === ingredientName) {
        return this.setState({ totalPrice: this.props.totalPrice - state[key] }, () => {
          this.props.updateTotalPrice(this.state.totalPrice);
        });
      }
    }
  };

  increment = (ingredientName, ingredients) => {
    if (this.props.ingredients[ingredientName] < 5) {
      this.props.addIngredients(ingredientName, ingredients);
      this.addToPrice(this.state, ingredientName);
    }
  };

  decrement = (ingredientName, ingredients) => {
    if (this.props.ingredients[ingredientName] > 0) {
      this.props.removeIngredients(ingredientName, ingredients);
      this.subtractFromPrice(this.state, ingredientName);
    }
  };

  render() {
    const { ingredients } = this.props;
    const arrayOfIngredients = Object.keys(ingredients);

    return (
      <div className='ingredients__controls--container'>
        <p className='ingredients__controls--totalprice'>Total Price: {this.props.totalPrice}</p>
        {arrayOfIngredients.map(ingredientName => {
          const reachedMax = ingredients[ingredientName] === 5 && ingredientName;
          const reachedMin = ingredients[ingredientName] === 0 && ingredientName;
          return (
            <div className='ingredients__controls--group' key={ingredientName}>
              <p>
                {ingredientName.toUpperCase()} ({ingredients[ingredientName]})
              </p>
              <button
                disabled={this.state.isDisabled || reachedMax}
                onClick={() => {
                  this.increment(ingredientName, ingredients);
                }}
                className='add_one'
              >
                More
              </button>
              <button
                disabled={this.state.isDisabled || reachedMin}
                onClick={() => {
                  this.decrement(ingredientName, ingredients);
                }}
                className='subtract_one'
              >
                Less
              </button>
            </div>
          );
        })}
        {!this.props.authenticated && (
          <p>
            Please <NavLink to='/auth'>sign in/up</NavLink> to create orders.
          </p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authenticated: state.auth.idToken,
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

export default connect(mapStateToProps, {
  addIngredients,
  removeIngredients,
  updateTotalPrice,
  resetIngredients,
  resetTotalPrice
})(IngredientsController);
