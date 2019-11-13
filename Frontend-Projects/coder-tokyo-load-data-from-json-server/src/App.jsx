import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TopMenu from './components/TopMenu';
import Products from './pages/Products';
import { CartProvider } from './contexts/CartProvider';

const Home = () => <h2>Home</h2>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">      
          <TopMenu />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
