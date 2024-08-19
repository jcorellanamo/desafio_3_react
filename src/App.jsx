// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Register from './components/Register';
// import Login from './components/Login';
import Cart from './components/Cart';
import { pizzaCart } from './pizzas';

const App = () => {
  const [cart, setCart] = useState(pizzaCart);
  const [token, setToken] = useState(false);

  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app">
      <Navbar total={calculateTotal()} token={token} />
      <div className="container-fluid">
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
};

export default App;
