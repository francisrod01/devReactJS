import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment, Form, Button } from 'semantic-ui-react';
import timezones from 'moment-timezone/data/meta/latest.json';

import ActionCreators from '../../redux/actionCreators';


class MyAccount extends Component {
  state = {
    unit: '',
    timezone: ''
  }
  componentDidMount() {
    const { auth } = this.props;

    this.setState({
      unit: auth.user.unit,
      timezone: auth.user.timezone
    });

    this.props.reset();
  }
  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  }
  handleSave = () => {
    const { unit, timezone } = this.state;

    this.props.save({
      id: this.props.auth.user.id,
      unit,
      timezone
    });
  }
  render() {
    return (
      <div>
        <h1>My Account</h1>

        {this.props.auth.saved && (
          <Segment color='green'>
            <p>Settings changed successfully.</p>
          </Segment>
        )}

        {!this.props.auth.saved && (
          <Form>
            <Form.Field>
            <select
              value={this.state.unit}
              onChange={this.handleChange('unit')}>
              <option value='metric'>Metric (km)</option>
              <option value='imperial'>Imperial (mi)</option>
            </select>
            </Form.Field>

            <Form.Field>
            <select
              value={this.state.timezone}
              onChange={this.handleChange('timezone')}>

              {Object.keys(timezones.zones).map(tz => (
                <option key={ tz } value={ tz }>{ tz }</option>
              ))}
            </select>
            </Form.Field>

            <Button onClick={this.handleSave}>Save</Button>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (user) => dispatch(ActionCreators.updateProfileRequest(user)),
    reset: () => dispatch(ActionCreators.updateProfileReset()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
