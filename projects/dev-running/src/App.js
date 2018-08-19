import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class App extends Component {
  async componentDidMount() {
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
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;