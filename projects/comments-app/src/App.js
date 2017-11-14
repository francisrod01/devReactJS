import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: {
        '1': {
          comment: 'First comment'
        },
        '2': {
          comment: 'Second comment'
        }
      }
    }
  }
  render() {
    return (
      <div className="container">
        <NewComment />
        <Comments />
      </div>
    )
  }
}

export default App
