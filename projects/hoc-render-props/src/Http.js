import React, { Component } from 'react'
import axios from 'axios'


class Http extends Component {
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
      .get(this.props.url)
      .then(res => {
        this.setState({
          isLoading: false,
          data: res.data
        })
      })
  }
  render() {
    return this.props.children(this.state)
  }
}

export default Http
