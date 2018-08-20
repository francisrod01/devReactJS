import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionCreator from '../redux/actionCreators';


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
    const { email, passwd } = this.state.form;
    this.props.signIn(email, passwd);
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
          type='password'
          value={this.state.form.passwd}
          onChange={this.handleChange('passwd')} />

        <button onClick={this.onSignIn}>Sign In</button>

        <p>{ JSON.stringify(this.props) }</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, passwd) => dispatch(ActionCreator.signinRequest(email, passwd)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
