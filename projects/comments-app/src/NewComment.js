import React, {Component} from 'react'


class NewComment extends Component {
    constructor(props) {
        super(props)

        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event) {
        if (event.keyCode === 13) {
            this.props.postNewComment({
                comment: 'Add a comment'
            })

            event.preventDefault()
        }
    }
    render() {
        return (
            <div className="row">
                <textarea placeholder="Comment here!" className="form-control" onKeyDown={this.handleEnter} />
            </div>
        )
    }
}

export default NewComment
