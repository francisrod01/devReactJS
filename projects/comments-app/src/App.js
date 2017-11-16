import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props)

    this.postNewComment = this.postNewComment.bind(this)

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    }

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({isLoggedIn: true, user})
      } else {
        this.setState({isLoggedIn: false, user: {}})
      }
    })

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })
  }
  postNewComment(comment) {
    const comments = {...this.state.comments}
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }
  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }
  render() {
    return (
      <div className="container">
        {
          !this.state.isLoggedIn && 
          <div className='alert alert-info'>
            <button onClick={() => this.auth('facebook')}>Signin with Facebook</button>
          </div>
        }
        {
          this.state.isLoggedIn && 
          <div>
            { this.state.user.displayName }
            <img alt={this.state.user.displayName} src={this.state.user.photoURL} /><br />
            <button onClick={() => this.props.auth.signOut()}>Logout</button>
            <NewComment postNewComment={this.postNewComment} />
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App
