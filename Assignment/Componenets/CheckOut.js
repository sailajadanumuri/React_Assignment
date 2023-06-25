import React, { useState } from 'react';

const Checkout = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = () => {
    
    console.log('Checkout initiated');
    console.log('Shipping Address:', shippingAddress);
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <div>
          <label>Shipping Address:</label>
          <input
            type="text"
            value={shippingAddress}
            onChange={e => setShippingAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <input
            type="text"
            value={paymentMethod}
            onChange={e => setPaymentMethod(e.target.value)}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
