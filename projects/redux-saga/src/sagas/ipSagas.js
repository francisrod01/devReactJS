import { put } from 'redux-saga/effects'
import axios from 'axios'

import { loadDataSuccess } from '../actions'

function *getIP() {
    const yieldData = yield axios.get('http://httpbin.org/ip')
    console.log('yieldData: ', yieldData.data.origin)
    yield put(loadDataSuccess(yieldData.data.origin))
}

export default getIP
