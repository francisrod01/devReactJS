import { takeLatest } from 'redux-saga/effects'

import getIP from './ipSagas'


function *index() {
    yield takeLatest('LOAD_DATA_IP_REQUEST', getIP)
}

export default index
