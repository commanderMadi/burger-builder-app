import React from 'react';
import { connect } from 'react-redux';
import {Burger} from './Burger';
import {Salad, Cheese, Meat, Bacon} from './styles/Burger';

class Checkout extends React.Component {
    render () {
        const { ingredients } = this.props;
        return (
            <div>
            <Burger>
                {ingredients.meat > 0 && <Meat></Meat>}
                {ingredients.bacon > 0 && <Bacon></Bacon>}
                {ingredients.salad > 0 && <Salad></Salad>}
                {ingredients.cheese > 0 && <Cheese></Cheese>}
                {ingredients.meat > 1 && <Meat></Meat>}
            </Burger>
        </div>
    )
        
    }
}

const mapStateToProps = state => {
    return {
      ingredients: state.ingredients
    }
  }

export default connect(mapStateToProps)(Checkout)