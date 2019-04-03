import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, Button } from 'semantic-ui-react';

import ActionCreators from '../../redux/actionCreators';

import Duration from '../elements/Duration';
import Distance from '../elements/Distance';
import DateStr from '../elements/DateStr';

class Runs extends Component {
  componentDidMount() {
    this.props.load();
  }
  renderRun = (run) => {
    return (
      <Table.Row key={run.id}>
        <Table.Cell>
          { run.friendly_name }
        </Table.Cell>

        <Table.Cell>
          <Duration duration={ run.duration } />
        </Table.Cell>

        <Table.Cell>
          <Distance distance={ run.distance } metric={this.props.auth.user.unit} />
        </Table.Cell>

        <Table.Cell>
          <DateStr date={ run.created } timezone={ this.props.auth.user.timezone } />
        </Table.Cell>
      </Table.Row>
    );
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

        <Button onClick={() => this.props.create(run)}>Create</Button>

        <Table celled>
          <Table.Header>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
            <Table.HeaderCell>Distance</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Header>

          <Table.Body>
            { this.props.runs.data.map(this.renderRun) }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    runs: state.runs,
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    load: () => dispatch(ActionCreators.getRunsRequest()),
    create: (run) => dispatch(ActionCreators.createRunRequest(run)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Runs);
