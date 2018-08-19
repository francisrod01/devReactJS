import React, { Component } from 'react';


class Login extends Component {
  state = {
    form: {
      email: '',
      passwd: '',
    }
  }
  handleChange = fieldName => event => {
    const form = {
      ...this.state.form,
    }
    form[fieldName] = event.target.value;
    this.setState({ form });
  }
  onSignIn = () => {
    console.log('on sign in...', this.state.form);
  }
  render() {
    return (
      <div>
        <h1>Login</h1>

        <input
          type='text'
          value={this.state.form.email}
          onChange={this.handleChange('email')} />

        <input
          type='text'
          value={this.state.form.passwd}
          onChange={this.handleChange('passwd')} />

        <button onClick={this.onSignIn}>Sign In</button>

        <p>{ JSON.stringify(this.state) }</p>
      </div>
    );
  }
}

export default Login;
