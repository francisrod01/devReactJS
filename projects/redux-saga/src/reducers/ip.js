const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false,
}

const ip = (state = INITIAL_STATE, action) => {
    if (action.type === 'LOAD_DATA_IP_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false,
        }
    }
    return state
}

export default ip
