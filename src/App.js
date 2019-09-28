import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import  HomePage  from './pages/homepage/HomePage';

const HatPage = props => {
  console.log(props)
  return (
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
