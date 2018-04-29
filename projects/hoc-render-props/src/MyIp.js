import React, { Component } from 'react'
import axios from 'axios'

class MyIp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      origin: null
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    
    axios
      .get('http://httpbin.org/ip')
      .then(res => {
        const { origin } = res.data
        if (origin) {
          this.setState({
            isLoading: false,
            origin
          })
        }
      })
  }
  render() {
    const { isLoading, origin } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <p>My ip is: {origin}</p>
    )
  }
}

export default MyIp
