import React from 'react';
import { connect } from 'react-redux';
import { addIngredients, removeIngredients, resetIngredients } from '../actions/builder';
import { updateTotalPrice, resetTotalPrice } from '../actions/price';

class BurgerBuilder extends React.Component {

    state = {
        meatPrice: 5,
        baconPrice: 3,
        cheesePrice: 2,
        saladPrice: 1,
        totalPrice: 0,
        isDisabled: true
    };

    componentDidMount() {
        if(this.props.authenticated) {
            this.setState(() => ({isDisabled: false}))
        }
        else if(!this.props.authenticated) {
            this.props.resetIngredients();
            this.props.resetTotalPrice();
        }
    }

    increment = (ingredientName, ingredients) => {
        if (this.props.ingredients[ingredientName] < 5) {
            this.props.addIngredients(ingredientName, ingredients);

            switch (ingredientName) {
                case 'meat':
                    this.setState(
                        prevState => ({
                            totalPrice:
                                prevState.totalPrice + this.state.meatPrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                case 'bacon':
                    this.setState(
                        prevState => ({
                            totalPrice: prevState.totalPrice + this.state.baconPrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                case 'cheese':
                    this.setState(
                        prevState => ({
                            totalPrice:
                                prevState.totalPrice + this.state.cheesePrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                case 'salad':
                    this.setState(
                        prevState => ({
                            totalPrice:
                                prevState.totalPrice + this.state.saladPrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                default:
                    console.log('nothing!')
                    break;
            }
        }
    };

    decrement = (ingredientName, ingredients) => {
        if (this.props.ingredients[ingredientName] > 0) {
            this.props.removeIngredients(ingredientName, ingredients);
            switch (ingredientName) {
                case 'meat':
                    this.setState(
                        prevState => ({
                            totalPrice:
                                prevState.totalPrice - this.state.meatPrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                case 'bacon':
                    this.setState(
                        prevState => ({
                            totalPrice: prevState.totalPrice - this.state.baconPrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                case 'cheese':
                    this.setState(
                        prevState => ({
                            totalPrice:
                                prevState.totalPrice - this.state.cheesePrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                case 'salad':
                    this.setState(
                        prevState => ({
                            totalPrice:
                                prevState.totalPrice - this.state.saladPrice
                        }),
                        () => {
                            this.props.updateTotalPrice(this.state.totalPrice);
                        }
                    );
                    break;
                default:
                    console.log('nothing!')
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
                                    {ingredientName}:{' '}
                                    {ingredients[ingredientName]}
                                </li>
                                <button
                                    disabled={this.state.isDisabled}
                                    onClick={() => {
                                        this.increment(
                                            ingredientName,
                                            ingredients
                                        );
                                    }}
                                    className='add_one'
                                >
                                    +
                                </button>
                                <button
                                    disabled={this.state.isDisabled}
                                    onClick={() => {
                                        this.decrement(
                                            ingredientName,
                                            ingredients
                                        );
                                    }}
                                    className='subtract_one'
                                >
                                    -
                                </button>
                                
                                {ingredients[ingredientName] >= 5 && (
                                    <span>Max amount to add reached</span>
                                )}
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
})(BurgerBuilder);
