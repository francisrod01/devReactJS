import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'


const Title = props => {
  if (!props.auth.isAuth) {
    return <h1>Please, log-in</h1>
  }
  return <h1 className="App-title">Welcome {props.auth.user}</h1>
}

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <Title auth={props.auth} />
  </header>
)

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: {
        user: null,
        isAuth: false
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header auth={this.state.auth} />
        
        <p className="App-intro">
          <button onClick={() => {
            if (this.state.auth.isAuth) {
              this.setState({
                auth: {
                  user: null, isAuth: false
                }
              })
            }
            else {
              this.setState({
                auth: {
                  user: 'john.doe', isAuth: true
                }
              })
            }
          }}>Toggle auth</button>
        </p>
      </div>
    )
  }
}

export default App
