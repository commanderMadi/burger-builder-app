import React from 'react';
import Modal from 'react-modal';

const CheckoutModal = props => (
  <Modal
    isOpen={!!props.isModalShown}
    contentLabel='Checkout Confirmation'
    onRequestClose={props.handleModalClear}
    ariaHideApp={false}
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Order Summary</h3>
    {props.totalPrice === 0 ? (
      <div>
        <p>Please add some ingredients to the cart first.</p>
        <button className='btn' onClick={props.handlecancelCheckout}>
          Okay
        </button>
      </div>
    ) : (
      <div>
        <p>Your order subtotal: {props.totalPrice} </p>
        <button className='btn' onClick={props.handleProceedToCheckout}>
          Proceed to checkout
        </button>
        <button className='btn' onClick={props.handlecancelCheckout}>
          Cancel
        </button>
      </div>
    )}
  </Modal>
);

export default CheckoutModal;
