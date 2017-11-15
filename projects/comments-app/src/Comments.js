import React, {Component} from 'react'

import Comment from './Comment'

class Comments extends Component {
    renderComment(_key, comment) {
        return (
            <Comment key={_key} comment={comment} />
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
