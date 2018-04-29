import React, { Component } from 'react'

import withHttp from './withHttp'

class MyIp extends Component {
  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>
    }
    return (
      <p>My ip is: {this.props.data.origin}</p>
    )
  }
}

export default withHttp(MyIp)
