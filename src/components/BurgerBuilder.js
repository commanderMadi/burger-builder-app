import React from 'react';
import { connect } from 'react-redux';
import IngredientsController from './IngredientsController';
import {Burger} from './Burger';
import {Salad, Cheese, Meat, Bacon} from './styles/Burger';

class BurgerBuilder extends React.Component {

    render () {
        const { ingredients } = this.props;
        return (
            <div>
            <h1>This is the Burger page container.</h1>
            <Burger>
                {ingredients.meat > 0 && <Meat></Meat>}
                {ingredients.bacon > 0 && <Bacon></Bacon>}
                {ingredients.salad > 0 && <Salad></Salad>}
                {ingredients.cheese > 0 && <Cheese></Cheese>}
                {ingredients.meat > 1 && <Meat></Meat>}
            </Burger>
            <IngredientsController/>
        </div>
    )
        
    }
}

const mapStateToProps = state => {
    return {
      ingredients: state.ingredients
    }
  }

export default connect(mapStateToProps)(BurgerBuilder)