import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment, Form, Button } from 'semantic-ui-react';

import ActionCreators from '../../redux/actionCreators';

class ChangePass extends Component {
  state = {
    passwd: '',
    confirmPasswd: '',
    error: '',
  }
  componentDidMount() {
    this.props.reset();
  }
  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  }
  handleSave = () => {
    const { passwd, confirmPasswd } = this.state;

    if (passwd.length < 6) {
      this.setState({
        error: 'minlength'
      });
    }
    else if (confirmPasswd !== passwd) {
      this.setState({
        error: 'equal'
      })
    }
    else {
      this.setState({
        error: ''
      });

      this.props.save({
        id: this.props.auth.user.id,
        passwd
      });
    }
  }
  render() {
    return (
      <div>
        <h1>Change Password</h1>

        {this.state.error === 'equal' && (
          <Segment color='red'>
            <p>Password and confirmation must be the same.</p>
          </Segment>
        )}

        {this.state.error === 'minlength' && (
          <Segment color='red'>
            <p>Password must be at least 6 characters.</p>
          </Segment>
        )}

        {this.props.auth.saved && (
          <Segment color='green'>
            <p>Password changed successfully.</p>
          </Segment>
        )}

        {!this.props.auth.saved && (
          <Form>
            <Form.Field>
              <label>New password</label>

              <input
                type='password'
                value={this.state.passwd}
                onChange={this.handleChange('passwd')}
              />
            </Form.Field>

            <Form.Field>
              <label>Confirm new password</label>

              <input
                type='password'
                value={this.state.confirmPasswd}
                onChange={this.handleChange('confirmPasswd')}
              />
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


export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);
