import React from "react"
import {Link} from "react-router-dom"

function App() {
    return (
      <div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>      
        </nav>
        <header>
          <h1>Down the Drain Plumbing</h1>
          </header>
      </div>
    )
}

export default App