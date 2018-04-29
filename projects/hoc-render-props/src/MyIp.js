import React from 'react'

import withHttp from './withHttp'


const url = 'http://httpbin.org/ip'

const MyIp = props => {
  if (props.isLoading && props.data) {
    return <p>Loading...</p>
  }
  return (
    <p>My ip is: {props.data.origin}</p>
  )
}

export default withHttp(url)(MyIp)
