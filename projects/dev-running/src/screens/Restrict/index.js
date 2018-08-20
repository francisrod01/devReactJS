import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RestrictHome from './Home';
import RestrictRuns from './Runs';


const Restrict = props => {
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  return (
    <div>
      <h1>Restrict</h1>

      <p>
        <Link to='/restrict'>Home</Link>
        <Link to='/restrict/runs'>Runs</Link>
      </p>

      <div>
        <Route exact path={`${props.match.path}/`} component={RestrictHome} />
        <Route path={`${props.match.path}/runs`} component={RestrictRuns} />
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
