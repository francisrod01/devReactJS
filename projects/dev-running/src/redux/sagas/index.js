import { takeLatest } from 'redux-saga/effects';

import { Types } from '../actionCreators';


function* signIn(action) {
  console.log('saga signIn: ', action);
}

export default function* rootSaga() {
  console.log('root saga');
  yield takeLatest(Types.SIGNIN_REQUEST, signIn);
}
