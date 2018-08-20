import { put } from 'redux-saga/effects';
import axios from 'axios';

import ActionCreators from '../actionCreators';


export function* getRuns() {
  const token = localStorage.getItem('token');

  const runs = yield axios.get('http://localhost:3001/runs', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  yield put(ActionCreators.getRunsSuccess(runs.data));
}
