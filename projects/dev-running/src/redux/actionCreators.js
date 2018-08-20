import { createActions } from 'reduxsauce';


export const {
  Types,
  Creators
} = createActions({
  signinRequest: ['email', 'passwd'],
  signinSuccess: ['user'],
  signinFailure: ['error'],

  authRequest: null,
  authSuccess: ['user'],
  authFailure: null,

  getRunsRequest: null,
  getRunsSuccess: ['runs'],
  getRunsFailure: null,
})


export default Creators;
