import React from 'react';
import { Route, Link } from 'react-router-dom';


const AdminHome = props => <h2>Admin Home</h2>
const AdminUsers = props => <h2>Admin Users</h2>

const Admin = props => {
  console.log(props);
  return (
    <div>
      <h1>Admin</h1>

      <p>
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

export default Admin;
