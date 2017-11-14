import React, {Component} from 'react'


class NewComment extends Component {
    render() {
        return (
            <div className="row">
                <textarea placeholder="Comment here!" className="form-control" />
            </div>
        )
    }
}

export default NewComment
