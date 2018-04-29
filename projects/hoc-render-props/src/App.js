import React, { Component } from 'react'
import PropTypes from 'prop-types'

import logo from './logo.svg'
import './App.css'

// import MyIp from './MyIp'
// import MyUserAgent from './MyUserAgent'
import Http from './Http'
// import Card from './Card'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {/*
            <MyIp style={{ backgroundColor: 'red' }} />
            <MyUserAgent />
          */}

          <Http
            url='http://httpbin.org/ip'
          >
            {state => (
              <div>
                <p>My IP is: {JSON.stringify(state)}</p>
              </div>
            )}
          </Http>

          <Http
            url='http://httpbin.org/user-agent'
          >
            {state => (
              <div>
                <p>My UA is: {JSON.stringify(state)}</p>
              </div>
            )}
          </Http>

          {/*<Card
            header={state => <p>{JSON.stringify(state)}</p>}
            body={<div>This is my body text.</div>}
          >
            {state => <p>Children: {state.counter}</p>}
          </Card>*/}
        </div>
      </div>
    )
  }
}

Http.propTypes = {
  children: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

export default App
