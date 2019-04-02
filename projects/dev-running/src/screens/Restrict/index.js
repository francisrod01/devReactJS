import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './elements/Header';

import RestrictHome from './Home';
import RestrictRuns from './Runs';
import MyAccount from './MyAccount';


const Restrict = props => {
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
