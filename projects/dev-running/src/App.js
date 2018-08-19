import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import store from './redux';

import Header from './Header';

import Home from './screens/Home';
import Admin from './screens/Admin';
import Restrict from './screens/Restrict';
import Login from './screens/Login';


class App extends Component {
  /*async componentDidMount() {
    let token = localStorage.getItem('token');
    if (!token) {
      const login = await axios.post('http://localhost:3001/users/login', {
        email: 'tuliofaria@devpleno.com',
        passwd: 'abc123'
      });
      token = login.data.token;
      localStorage.setItem('token', token);
    }
    const decoded = jwtDecode(token);
    console.log(decoded);

    const user = await axios.get('http://localhost:3001/users/me', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log('=== user me: ', user);
  }*/
  render() {
    return (
      <Provider store={store}>
        <Router>

          <div className="App">

            <Route exact path='/' component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/restrict' component={Restrict} />
            <Route path='/login' component={Login} />

            <Header />
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
