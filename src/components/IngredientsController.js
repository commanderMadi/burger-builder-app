import React from 'react';
import { connect } from 'react-redux';
import { addIngredients, removeIngredients, resetIngredients } from '../actions/builder';
import { updateTotalPrice, resetTotalPrice } from '../actions/price';

class IngredientsController extends React.Component {
  state = {
    meatPrice: 5,
    baconPrice: 3,
    cheesePrice: 2,
    saladPrice: 1,
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

  addToPrice = itemPrice =>
    this.setState({ totalPrice: this.props.totalPrice + itemPrice }, () => {
      this.props.updateTotalPrice(this.state.totalPrice);
    });
  subtractFromPrice = itemPrice =>
    this.setState({ totalPrice: this.props.totalPrice - itemPrice }, () => {
      this.props.updateTotalPrice(this.state.totalPrice);
    });

  increment = (ingredientName, ingredients) => {
    if (this.props.ingredients[ingredientName] < 5) {
      this.props.addIngredients(ingredientName, ingredients);

      switch (ingredientName) {
        case 'meat':
          this.addToPrice(this.state.meatPrice);
          break;
        case 'bacon':
          this.addToPrice(this.state.baconPrice);
          break;
        case 'cheese':
          this.addToPrice(this.state.cheesePrice);
          break;
        case 'salad':
          this.addToPrice(this.state.saladPrice);
          break;
        default:
          break;
      }
    }
  };

  decrement = (ingredientName, ingredients) => {
    if (this.props.ingredients[ingredientName] > 0) {
      this.props.removeIngredients(ingredientName, ingredients);
      switch (ingredientName) {
        case 'meat':
          this.subtractFromPrice(this.state.meatPrice);
          break;
        case 'bacon':
          this.subtractFromPrice(this.state.baconPrice);

          break;
        case 'cheese':
          this.subtractFromPrice(this.state.cheesePrice);
          break;
        case 'salad':
          this.subtractFromPrice(this.state.saladPrice);
          break;
        default:
          break;
      }
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
