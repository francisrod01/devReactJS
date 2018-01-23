import { put, call } from 'redux-saga/effects'

import { loadDataSuccess } from '../actions'

function *getIP(axios) {
    const yieldData = yield call(axios.get, 'http://httpbin.org/ip')
    console.log('yieldData: ', yieldData.data.origin)
    yield put(loadDataSuccess(yieldData.data.origin))
}

export default getIP
