import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container'>
            <a href='/' className='navbar-brand'>
              Products Management
            </a>
            <button className="navbar-toggler" type="button" 
              data-toggle="collapse" data-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Products</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container' style={{'paddingTop': 20}}>
          <h1>Products Management</h1>
        </div>
      </div>
    );
  }
}

export default App
