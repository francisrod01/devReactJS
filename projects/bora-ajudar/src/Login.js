import React, { Component } from 'react';


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
