import React, { Component } from 'react'
import axios from 'axios'

const withHttp = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        isLoading: false,
        data: {}
      }
    }
    componentDidMount() {
      this.setState({
        isLoading: true
      })
      
      axios
        .get('http://httpbin.org/ip')
        .then(res => {
          this.setState({
            isLoading: false,
            data: res.data
          })
        })
    }
    render() {
      return (
        <div>
          <WrappedComponent
            data={this.state.data}
            isLoading={this.state.isLoading}
          />
        </div>
      )
    }
  }
}

export default withHttp
