import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'


// Creates a { Provider, Consumer } pair.
const AuthContext = React.createContext()

// Provide a available state after a point.
const Provider = AuthContext.Provider

// Consume changes in React components.
const Consumer = AuthContext.Consumer

const Title = () => {
  return (
    <Consumer>
      {auth => {
        if (!auth.isAuth) {
          return <h1>Please, log-in</h1>
        }
        return <h1 className="App-title">Welcome {auth.user}</h1>
      }}
    </Consumer>
  )
}

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <Title />
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
      <Provider value={this.state.auth}>
        <div className="App">
          <Header />
          
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
      </Provider>
    )
  }
}

export default App
