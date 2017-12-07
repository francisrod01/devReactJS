import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

const Counter = ({ count, increment, decrement }) => {
    return (
        <p>
            Counter: { count }{' '}
            <button onClick={ increment }>+</button>
            <button onClick={ decrement }>-</button>
        </p>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment),
        decrement: () => dispatch(decrement)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
