import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Burger } from './Burger';
import { resetIngredients } from '../actions/builder';
import { resetTotalPrice } from '../actions/price';
import { Salad, Cheese, Meat, Bacon } from '../styles/components/Burger';
import { Form } from '../styles/components/Form';
import { FormWrapper } from '../styles/components/FormWrapper';
import { TotalWithShipping, SubTotal } from '../styles/components/Checkout';
import { FlexWrapper } from '../styles/components/FlexWrapper';

class Checkout extends React.Component {
  state = {
    formFields: {
      username: '',
      country: '',
      zipCode: '',
      address: ''
    },
    selectedShippingMethod: '',
    totalCost: 0,
    isDisabledTitle: false
  };

  handleChange = e => {
    console.log(e.target.value);
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_POST_ORDER}auth=${this.props.idToken}`, {
        ingredients: this.props.ingredients,
        orderData: {
          ...this.state.formFields,
          deliveryMethod: this.state.selectedShippingMethod
        },
        price: this.state.totalCost,
        userId: this.props.localId
      });
      console.log(response);
      this.props.history.push('/');
      this.props.resetIngredients();
      this.props.resetTotalPrice();
    } catch (e) {
      console.log(e);
    }
  };
  handleSelect = e => {
    console.log(e.target.value);
    this.setState({ isDisabledTitle: true });
    switch (e.target.value) {
      case 'Cheapest':
        this.setState({
          selectedShippingMethod: e.target.value,
          totalCost: this.props.totalPrice * 1.14
        });
        break;
      case 'Fastest':
        this.setState({
          selectedShippingMethod: e.target.value,
          totalCost: this.props.totalPrice * 1.3
        });
        break;
      default:
        this.setState({
          selectedShippingMethod: null,
          totalCost: 0
        });
        break;
    }
  };
  render() {
    const { ingredients } = this.props;
    const { username, country, address, zipCode } = this.state.formFields;
    const isEnabled =
      username.length > 0 && country.length > 0 && address.length > 0 && zipCode.length > 0 && this.state.selectedShippingMethod.length > 0;
    return (
      <FlexWrapper>
        <Burger>
          {ingredients.meat > 0 && <Meat></Meat>}
          {ingredients.bacon > 0 && <Bacon></Bacon>}
          {ingredients.salad > 0 && <Salad></Salad>}
          {ingredients.cheese > 0 && <Cheese></Cheese>}
          {ingredients.meat > 1 && <Meat></Meat>}
        </Burger>
        <SubTotal>Subtotal: {this.props.totalPrice}</SubTotal>
        {this.state.selectedShippingMethod && (
          <TotalWithShipping>
            Total with {this.state.selectedShippingMethod} shipping option: {this.state.totalCost.toFixed(2)}
          </TotalWithShipping>
        )}
        <p>
          Not satisfied with your order? Click <Link to='/burgerbuilder'>here</Link> to modify it!
        </p>
        <FormWrapper>
          <Form onSubmit={this.handleOnSubmit}>
            <input
              type='text'
              placeholder='Your Name'
              required
              name='username'
              onChange={e => this.handleChange(e)}
              value={this.state.formFields.username}
            />
            <input
              type='text'
              placeholder='Your Address'
              required
              name='address'
              onChange={e => this.handleChange(e)}
              value={this.state.formFields.address}
            />
            <input
              type='text'
              pattern='\d*'
              maxLength='5'
              placeholder='Your zip code (numbers only)'
              required
              name='zipCode'
              onChange={e => this.handleChange(e)}
              value={this.state.formFields.zipCode}
            />
            <input
              type='text'
              placeholder='country'
              required
              name='country'
              onChange={e => this.handleChange(e)}
              value={this.state.formFields.country}
            />
            <select value={this.state.selectedShippingMethod} onChange={this.handleSelect} required>
              <option disabled={this.state.isDisabledTitle}>Select a delivery method</option>
              <option>Cheapest</option>
              <option>Fastest</option>
            </select>
            <button disabled={!isEnabled}>Order Now</button>
          </Form>
        </FormWrapper>
      </FlexWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    idToken: state.auth.idToken,
    localId: state.auth.localId
  };
};

export default connect(mapStateToProps, { resetIngredients, resetTotalPrice })(Checkout);
