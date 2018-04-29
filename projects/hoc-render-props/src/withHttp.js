import React, { Component } from 'react'
import axios from 'axios'

const withHttp = url => WrappedComponent => {
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
        .get(url)
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
