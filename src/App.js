import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import  HomePage  from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignOut from './pages/sign-in-and-sign-out/SignInAndSignOut';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
