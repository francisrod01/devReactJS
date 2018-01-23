import { takeLatest } from 'redux-saga/effects'

import getIP from './ipSagas'
import getUA from './uaSagas'


function *index() {
    yield [
        takeLatest('LOAD_DATA_IP_REQUEST', getIP),
        takeLatest('LOAD_DATA_UA_REQUEST', getUA)
    ]
}

export default index
