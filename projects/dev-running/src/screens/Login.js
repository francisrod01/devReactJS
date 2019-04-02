import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ActionCreator from '../redux/actionCreators';

import { Form, Button } from 'semantic-ui-react';


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
    if (this.props.auth.isAuth) {
      if (this.props.auth.user.role === 'admin') {
        return <Redirect to='/admin' />
      }
      else {
        return <Redirect to='/restrict' />
      }
    }
    return (
      <div>
        <h1>Login</h1>

        <Form>

          <Form.Field>
            <label>Email</label>
            <input
              type='text'
              value={this.state.form.email}
              onChange={this.handleChange('email')} />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              value={this.state.form.passwd}
              onChange={this.handleChange('passwd')} />
          </Form.Field>

          <Button onClick={this.onSignIn}>Sign In</Button>

          { this.props.auth.error && <p>Error to authenticate.</p> }
        </Form>
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
