import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment, Form, Input, Button } from 'semantic-ui-react';

import ActionCreators from '../../redux/actionCreators';

class ChangePass extends Component {
  state = {
    passwd: '',
    confirmPasswd: ''
  }
  componentDidMount() {
    //
  }
  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  }
  handleSave = () => {
    this.props.save({
      id: this.props.auth.user.id,
      passwd: this.state.passwd,
    });
  }
  render() {
    return (
      <div>
        <h1>Change Password</h1>

        {this.props.auth.saved && (
          <Segment color='green'>
            <p>Password changed successfully.</p>
          </Segment>
        )}

        {!this.props.auth.saved && (
          <Form>
            <Input
              type='password'
              value={this.state.passwd}
              onChange={this.handleChange('passwd')}
            />

            <Input
              type='password'
              value={this.state.confirmPasswd}
              onChange={this.handleChange('confirmPasswd')}
            />

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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangePass);
