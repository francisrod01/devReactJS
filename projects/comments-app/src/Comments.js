import React, {Component} from 'react'

class Comments extends Component {
    render() {
        return (
            <div>
                Rendering comments here.
                <code>{JSON.stringify(this.props.comments)}</code>
            </div>
        )
    }
}

export default Comments
