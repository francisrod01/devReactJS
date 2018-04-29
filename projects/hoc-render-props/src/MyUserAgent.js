import React, { Component } from 'react'
import axios from 'axios'

class MyAgent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      agent: null
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    
    axios
      .get('http://httpbin.org/user-agent')
      .then(res => {
        const response = res.data
        if (response['user-agent']) {
          this.setState({
            isLoading: false,
            agent: response['user-agent']
          })
        }
      })
  }
  render() {
    const { isLoading, agent } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <p>My agent is: {agent}</p>
    )
  }
}

export default MyAgent
