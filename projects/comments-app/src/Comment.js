import React, {Component} from 'react'

class Comment extends Component {
    render() {
        return (
            <p className="well">{this.props.comment.comment}</p>
        )
    }
}

export default Comment
