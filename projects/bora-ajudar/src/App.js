import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
