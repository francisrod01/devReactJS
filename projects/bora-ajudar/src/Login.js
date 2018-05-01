import React, { Component } from 'react';

import { auth } from './base';


class Login extends Component {
  constructor(props) {
    super(props);

    this.email = null;
    this.passwd = null;

    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    console.log('login: ',
    this.email.value,
    this.passwd.value);

    const email = this.email.value;
    const passwd = this.passwd.value;

    auth
      .signInWithEmailAndPassword(email, passwd)
      .then(user => console.log('user === ', user))
      .catch(err => console.error('ERROR: ', err));
  }
  render() {
    return (
      <div>
        <input type='email' ref={ref => this.email = ref} />
        <input type='passwd' ref={ref => this.passwd = ref} />
        <button onClick={this.handleLogin}>Sign in</button>
      </div>
    )
  }
}

export default Login;
