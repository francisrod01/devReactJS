import { put } from 'redux-saga/effects'

import { loadDataUASuccess } from '../actions'

function *getUA(axios) {
    const yieldData = yield axios.get('http://httpbin.org/user-agent')
    yield put(loadDataUASuccess(yieldData.data['user-agent']))
}

export default getUA
