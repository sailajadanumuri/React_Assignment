import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BookListing from './components/BookListing';
import BookDetails from './components/BookDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/CheckOut';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={BookListing} />
        <Route path="/book/:id" component={BookDetails} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;