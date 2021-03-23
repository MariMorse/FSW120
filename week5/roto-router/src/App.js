import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>  
              <Link to="/about">About</Link>
            <li>  
              <Link to="/services">Services</Link>
            </li>
          </ul>      
        </nav>

          <Switch>
              <Route  exact path="/"><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/services"><Services /></Route>
          </Switch>
        
      </div>
    )
}

export default App