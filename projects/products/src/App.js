import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import About from './About'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
              <Link to='/' className='navbar-brand'>
                Products Management
              </Link>
              <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/products'>Products</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/about'>About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='container' style={{'paddingTop': 20}}>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App
