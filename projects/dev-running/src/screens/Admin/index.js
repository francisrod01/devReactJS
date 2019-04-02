import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './elements/Header';

const AdminHome = props => <h2>Admin Home</h2>
const AdminUsers = props => <h2>Admin Users</h2>

const Admin = props => {
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  if (props.auth.user.role !== 'admin') {
    return <Redirect to='/restrict' />
  }
  return (
    <div>
      <Header />

      <div>
        <Route exact path={`${props.match.path}/`} component={AdminHome} />
        <Route path={`${props.match.path}/users`} component={AdminUsers} />
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}


export default connect(mapStateToProps)(Admin);
