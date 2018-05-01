import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from './base';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthing: true,
      isLoggedIn: false,
      user: null
    }
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log('auth output: ', user);

      this.setState({
        isAuthing: false,
        isLoggedIn: !!user,
        user
      })
    })
  }
  render() {
    if (this.state.isAuthing) {
      return <p>Loading...</p>
    }
    if (!this.state.isLoggedIn) {
      return <Redirect to='/login' />
    }
    return (
      <h1>Admin {JSON.stringify(this.state)}</h1>
    );
  }
}

export default Admin;
