export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_IP_REQUEST',
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: 'LOAD_DATA_IP_SUCCESS',
        data: data,
    }
}


/////// Load user agent

export const loadDataUARequest = () => {
    return {
        type: 'LOAD_DATA_UA_REQUEST',
    }
}

export const loadDataUASuccess = (data) => {
    return {
        type: 'LOAD_DATA_UA_SUCCESS',
        data: data,
    }
}
