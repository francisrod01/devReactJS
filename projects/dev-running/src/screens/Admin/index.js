import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


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
      <h1>Admin</h1>

      <p>
        {JSON.stringify(props.auth)}
        <Link to='/admin'>Home</Link>
        <Link to='/admin/users'>Users</Link>
      </p>

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
