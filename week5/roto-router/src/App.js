import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return (
      <div>
        <nav>
              <Link to="/">Home</Link>
              <hr />
              <Link to="/about">About</Link>
              <hr />
              <Link to="/services">Services</Link>      
        </nav>


          <Switch>
              <Route  exact path="/"><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/services"><Services /></Route>
          </Switch>
        <header>
          
          </header>
      </div>
    )
}

export default App