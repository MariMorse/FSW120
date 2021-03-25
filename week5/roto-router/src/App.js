import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"

function App() {
    return (
      <div>
        
        <nav>
          <ul className="header">
            <li>
              <Link to="/">Home</Link>
            </li>  
              <Link to="/about">About</Link>
            <li>  
              <Link to="/services">Services</Link>
            </li>
          </ul>      
        </nav>
        <div className="content">


        </div>
          <Switch>
              <Route  exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
          </Switch>
        
      </div>
    )
}

export default App