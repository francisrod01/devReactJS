import React , { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { auth } from './base';

import AdminCampaigns from './AdminCampaigns';


const AdminHome = props => <p>Welcome to Dashboard</p>

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
      <div className='card'>
        <h1>Admin Management</h1>

        <Route path='/' component={AdminHome} />
        <Route
          path={`${this.props.match.url}/campaigns`}
          component={AdminCampaigns}
        />
      </div>
    );
  }
}

export default Admin;
