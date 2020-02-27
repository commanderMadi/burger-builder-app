import React from 'react';
import { connect } from 'react-redux';
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
      <div>
        <div>Total Price: {this.props.totalPrice}</div>
        <ul>
          {arrayOfIngredients.map(ingredientName => {
            return (
              <div key={ingredientName}>
                <li>
                  {ingredientName}: {ingredients[ingredientName]}
                </li>
                <button
                  disabled={this.state.isDisabled}
                  onClick={() => {
                    this.increment(ingredientName, ingredients);
                  }}
                  className='add_one'
                >
                  +
                </button>
                <button
                  disabled={this.state.isDisabled}
                  onClick={() => {
                    this.decrement(ingredientName, ingredients);
                  }}
                  className='subtract_one'
                >
                  -
                </button>

                {ingredients[ingredientName] === 5 && ingredientName && <span>Max amount to add reached</span>}
              </div>
            );
          })}
        </ul>
        {!this.props.authenticated && <p>Please sign in/up to make orders.</p>}
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
