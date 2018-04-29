import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

import MyIp from './MyIp'
import MyUserAgent from './MyUserAgent'
import Card from './Card'

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
          <Card
            header={state => <p>{JSON.stringify(state)}</p>}
            body={<div>This is my body text.</div>}
          >
            {state => <p>Children: {state.counter}</p>}
          </Card>
        </div>
      </div>
    )
  }
}

export default App
