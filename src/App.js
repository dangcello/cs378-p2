import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import Logo from './components/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const updateQuantity = (id, newQuantity) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: newQuantity }));
  };

  const subtotal = menuItems.reduce((total, item) => total + item.price * quantities[item.id], 0);

  const clearAll = () => {
    setQuantities(
      menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
    );
  };


  const placeOrder = () => {
    const orderedItems = menuItems
      .filter((item) => quantities[item.id] > 0)
      .map((item) => `${item.title} x${quantities[item.id]}`)
      .join("\n");

    if (orderedItems.length === 0) {
      alert("No items in cart.");
    } else {
      alert(`Order placed!\n\nItems Ordered:\n${orderedItems}\n\nTotal: $${subtotal.toFixed(2)}`);
    }
  };

  return (
    <div className="test">
      <div className="logo-wrapper">
        <Logo
          title="Authentic Korean/Japanese Fusion"
          subtitle="Fresh and Delicious Asian Foods!"
          imageName="Logo.jpg"
        />
      </div>

      <div className="menu-container">
        <div className="menu">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              description={item.description}
              imageName={item.imageName}
              price={item.price}
              quantity={quantities[item.id]}
              setQuantity={(newQuantity) => updateQuantity(item.id, newQuantity)}
            />
          ))}
        </div>

        <div className="button-wrapper">
          <h4 className="subtotal-text">Subtotal: ${subtotal.toFixed(2)}</h4>
          <button className="order-button" onClick={placeOrder}>
            Place Order
          </button>
          <button className="clear-all-button" onClick={clearAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;
