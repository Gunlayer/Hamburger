import React, { useState, useEffect } from 'react';
import './components/style/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Gunlayer/traning/main/product.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage cart={cart} setCart={setCart} items={items} filteredItems={filteredItems} setFilteredItems={setFilteredItems} setUserInput={setUserInput} error={error} setError={setError} isLoaded={isLoaded} setIsLoaded={setIsLoaded} userInput={userInput} />
        </Route>

        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
