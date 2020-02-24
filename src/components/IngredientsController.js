import React from 'react';
import { connect } from 'react-redux';
import { addIngredients, removeIngredients } from '../actions/builder'

class BurgerBuilder extends React.Component {


  increment = (ingredientName, ingredients) => {
    if(this.props.ingredients[ingredientName] < 5) {
      this.props.addIngredients(ingredientName, ingredients)
    }
  }
  
  decrement = (ingredientName, ingredients) => {
    if(this.props.ingredients[ingredientName] > 0) {
      this.props.removeIngredients(ingredientName, ingredients)
    }
  }

  render() {
    const { ingredients } = this.props;
    const arrayOfIngredients = Object.keys(ingredients);

    return <div>
      <ul>
        {arrayOfIngredients.map(ingredientName => {
          return (<div key={ingredientName}>
            <li>{ingredientName}: {ingredients[ingredientName]}</li>
            <button onClick={() => this.increment(ingredientName, ingredients)} className="add_one">+</button>
            <button onClick={() => this.decrement(ingredientName, ingredients)} className="subtract_one">-</button>
            {ingredients[ingredientName] >= 5 && <span>Max amount to add reached</span>}
          </div>)
        })}
      </ul>
    </div>;
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps, {addIngredients, removeIngredients})(BurgerBuilder)
