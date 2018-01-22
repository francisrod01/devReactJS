import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from './actions'


export class UserAgent extends Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        if (this.props.isFetching) {
            return <span>Loading...</span>
        }
        if (this.props.error) {
            return <span>Error</span>
        }
        return (
            <div>
                <span>UserAgent: { this.props.data['user-agent'] }</span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions.loadUA())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)
