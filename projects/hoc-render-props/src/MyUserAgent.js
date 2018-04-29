import React, { Component } from 'react'

import withHttp from './withHttp'


const url = 'http://httpbin.org/user-agent'

const MyAgent = props => {
  if (props.isLoading && props.data) {
    return <p>Loading...</p>
  }
  return (
    <p>My agent is: {props.data['user-agent']}</p>
  )
}

export default withHttp(url)(MyAgent)
