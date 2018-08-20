import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionCreators from '../../redux/actionCreators';


class Runs extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    const run = {
      friendly_name: 'run test',
      duration: 100,
      distance: 100,
      created: '2018-01-01 00:00:00',
    }
    return (
      <div>
        <h1>Runs</h1>

        <button onClick={() => this.props.create(run)}>Create</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    runs: state.runs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(ActionCreators.getRunsRequest()),
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Runs);
