import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
