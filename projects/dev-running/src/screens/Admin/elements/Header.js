import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import ActionCreators from '../../../redux/actionCreators';

const Header = props => (
  <Menu>
    <Menu.Item>Corridas Online <strong>Admin</strong></Menu.Item>
    <Menu.Item as={Link} to='/admin'>Dashboard</Menu.Item>
    <Menu.Item as={Link} to='/admin/users'>Users</Menu.Item>
  </Menu>
);

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
