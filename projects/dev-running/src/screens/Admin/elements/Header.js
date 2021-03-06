import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu, Dropdown, Image } from 'semantic-ui-react';

import ActionCreators from '../../../redux/actionCreators';

const Header = props => (
  <Menu>
    <Menu.Item as={Link} to='/'>
      <Image
        src={'/logos/logo.png'}
        alt={'Runs online'}
        size='small'
      />
    </Menu.Item>
    <Menu.Item as={Link} to='/admin'>Dashboard</Menu.Item>
    <Menu.Item as={Link} to='/admin/users'>Users</Menu.Item>

    <Menu.Menu position='right'>
      <Dropdown item text={ props.auth.user.name }>
        <Dropdown.Menu>
          <Dropdown.Item>My Account</Dropdown.Item>
          <Dropdown.Item>Change password</Dropdown.Item>
          <Dropdown.Item onClick={props.logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
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
    logout: () => dispatch(ActionCreators.destroyAuthRequest()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
