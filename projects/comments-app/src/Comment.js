import React from 'react'

// Functional stateless component.
const Comment = props =>
    <p className="well">
        <strong>{props.comment.user.name}</strong>:<br />
        {props.comment.comment}
    </p>

export default Comment
