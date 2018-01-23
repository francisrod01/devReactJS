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
