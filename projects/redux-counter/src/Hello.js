import React from 'react'
import PropTypes from 'prop-types'

const Hello = ({ name }) => {
    return (
        <span>Hello { name }</span>
    )
}

Hello.propTypes = {
    name: PropTypes.string.isRequired
}
Hello.defaultProps = {
    name: 'John Doe'
}

export default Hello
