import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, Services } from './pages'


function App() {
  return (
    <Router className='relative'>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

