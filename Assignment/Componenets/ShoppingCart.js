import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
