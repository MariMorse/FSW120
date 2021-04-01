import React from "react"
import './Router.css';

import Footer from './pages/Footer'
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"





function App() {
    return (
      <div>
        <br /><br />
        <div style={{marginLeft:"30%", width:"800px"}}>  
          <Router>
            <Switch>
                <Route  exact path='/Services'><Services /></Route>
                <Route exact path='/About'><About /></Route>
                <Route path='/'><Home /></Route>
            </Switch>
          </Router>
          <Footer />
        </div> 
      </div>
    )
}

export default App