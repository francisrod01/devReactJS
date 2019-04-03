import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu, Image } from 'semantic-ui-react';

import ActionCreators from './redux/actionCreators';

const Header = props => {
  return (
    <Menu>
      <Menu.Item as={Link} to='/'>
        <Image
          src={'/logos/logo.png'}
          alt={'Runs online'}
          size='small'
        />
      </Menu.Item>
      <Menu.Item as={Link} to='/'>Home</Menu.Item>
      <Menu.Item as={Link} to='/admin'>Admin</Menu.Item>
      <Menu.Item as={Link} to='/restrict'>Restrict</Menu.Item>
      <Menu.Item as={Link} to='/login'>Login</Menu.Item>
    </Menu>
  );
}

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
