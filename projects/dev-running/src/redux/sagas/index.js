import { takeLatest, all, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import ActionCreators, { Types } from '../actionCreators';


function* signIn(action) {
  let token = localStorage.getItem('token');
  const login = yield axios.post('http://localhost:3001/users/login', {
    email: action.email,
    passwd: action.passwd,
  });
  if (login.data.token) {
    token = login.data.token;
    localStorage.setItem('token', token);

    const userDecoded = jwtDecode(token);
    localStorage.setItem('user', userDecoded);

    yield put(ActionCreators.signinSuccess(userDecoded));
  }
  else {
    yield put(ActionCreators.signinFailure(login.data.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, signIn),
  ]);
}
