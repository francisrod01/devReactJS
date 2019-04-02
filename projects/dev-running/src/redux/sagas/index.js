import { takeLatest, all, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import ActionCreators, { Types } from '../actionCreators';

import { getRuns, createRun } from './runs';


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

function* auth() {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const user = jwtDecode(token);
      yield put(ActionCreators.authSuccess(user));
    }
    catch (err) {
      yield put(ActionCreators.authFailure('Invalid token.'));
    }
  }
  else {
    yield put(ActionCreators.authFailure('There is no token.'));
  }
}

function* destroyAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  yield put(ActionCreators.destroyAuthSuccess());
}


export default function* rootSaga() {
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, signIn),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    takeLatest(Types.CREATE_RUN_REQUEST, createRun),
    takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),

    put(ActionCreators.authRequest()),
  ]);
}
