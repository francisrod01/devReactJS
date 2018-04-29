import React from 'react'

import withHttp from './withHttp'

const MyIp = props => {
  if (props.isLoading && props.data) {
    return <p>Loading...</p>
  }
  return (
    <p>My ip is: {props.data.origin}</p>
  )
}

export default withHttp(MyIp)
