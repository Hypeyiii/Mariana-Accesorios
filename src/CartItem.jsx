import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">${item.price}</span>
        <span className="quantity">Quantity: {item.quantity}</span>
        <button onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
