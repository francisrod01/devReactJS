import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NewComment />
      </div>
    )
  }
}

export default App
