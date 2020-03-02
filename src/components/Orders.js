import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orders';
import { OrderWrapper } from '../styles/components/Orders';

class Orders extends React.Component {
  componentDidMount() {
    this.props.getOrders(`${process.env.REACT_APP_POST_ORDER}auth=${this.props.idToken}&orderBy="userId"&equalTo="${this.props.localId}"`);
  }

  render() {
    const ordersObjects = this.props.orders;
    const ordersObjectsValues = Object.values(ordersObjects);
    const arrayOfOrders = Object.values(ordersObjectsValues);
    const keys = Object.keys(ordersObjects);

    return arrayOfOrders.map((order, index) => {
      const { bacon, cheese, meat, salad } = order.ingredients;
      const price = order.price;
      return (
        <OrderWrapper key={keys[index]}>
          <p>Order#{index + 1}</p>
          <ul>
            <li>Bacon: {bacon}</li>
            <li>Cheese: {cheese}</li>
            <li>Meat: {meat}</li>
            <li>Salad: {salad}</li>
          </ul>
          <p>Price: USD{price.toFixed(2)}</p>
        </OrderWrapper>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    idToken: state.auth.idToken,
    localId: state.auth.localId,
    orders: state.orders
  };
};

export default connect(mapStateToProps, { getOrders })(Orders);
