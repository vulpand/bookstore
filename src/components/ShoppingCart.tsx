import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart, adjustQuantity, totalPrice, submitCart } = useCart();

  return (
    <aside>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span> x {item.quantity}</span>
          <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => adjustQuantity(item.id, item.quantity - 1)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={submitCart}>Checkout</button>
    </aside>
  );
};

export default ShoppingCart;
