import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddCheese from './AddCheese';
import ViewCheese from './ViewCheese'
import Home from './Home'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/view-cheese' component={ViewCheese}/>
        <Route path='/add-cheese' component={AddCheese}/>
      </Switch>
    </main>
  );
}

export default Main