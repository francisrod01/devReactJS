import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from './base';


class Login extends Component {
  constructor(props) {
    super(props);

    this.email = null;
    this.passwd = null;

    this.state = {
      isLoggedIn: false,
      error: false,
      isLogging: false
    }

    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.setState({
      isLogging: true,
      error: false
    });

    const email = this.email.value;
    const passwd = this.passwd.value;

    auth
      .signInWithEmailAndPassword(email, passwd)
      .then(user => {
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          isLogging: false
        });
      });
  }
  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/admin' />
    }
    return (
      <div>
        <input type='email' ref={ref => this.email = ref} />
        <input type='passwd' ref={ref => this.passwd = ref} />
        {this.state.error && <p>Email and/or password invalid.</p>}
        <button disabled={this.state.isLogging} onClick={this.handleLogin}>Sign in</button>
      </div>
    )
  }
}

export default Login;
