import React, {Component} from 'react'

class Comments extends Component {
    renderComment(_key, comment) {
        return (
            <p key={_key}>{comment.comment}</p>
        )
    }
    render() {
        return (
            <div>
                {
                    Object.keys(this.props.comments).map(_key => this.renderComment(_key, this.props.comments[_key]))
                }
            </div>
        )
    }
}

export default Comments
