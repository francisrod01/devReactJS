import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './elements/Header';

import RestrictHome from './Home';
import RestrictRuns from './Runs';
import MyAccount from './MyAccount';
import ChangePass from './ChangePass';


const Restrict = props => {
  if (props.auth.isSigningIn) {
    return <p>Loading...</p>;
  }
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  return (
    <div>
      <Header />

      <div>
        <Route exact path={`${props.match.path}/`} component={RestrictHome} />
        <Route path={`${props.match.path}/runs`} component={RestrictRuns} />
        <Route path={`${props.match.path}/my-account`} component={MyAccount} />
        <Route path={`${props.match.path}/change-pass`} component={ChangePass} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}


export default connect(mapStateToProps)(Restrict);
