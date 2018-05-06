import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Campaigns from './Campaigns';
import Admin from './Admin';
import Login from './Login';
import Contact from './Contact';
import Footer from './Footer';
import Error404 from './Error404';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/campaigns' component={Campaigns} />
            <Route path='/contact' component={Contact} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={Login} />
            <Route component={Error404} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
