import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import ActionCreators from '../../../redux/actionCreators';

const Header = props => (
  <Menu>
    <Menu.Item>Runs Online <strong>Restrict</strong></Menu.Item>
    <Menu.Item as={Link} to='/restrict'>Dashboard</Menu.Item>
    <Menu.Item as={Link} to='/restrict/runs'>Runs</Menu.Item>
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
