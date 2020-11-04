import { createActions } from '../config';

export const types = {
  logOut: '@auth/LOG_OUT',
  signFailure: '@auth/SIGN_FAILURE',
  signInRequest: '@auth/SIGN_IN_REQUEST',
  signInSuccess: '@auth/SIGN_IN_SUCCESS',
};

export const actions = createActions({
  logOut: types.logOut,
  signFailure: types.signFailure,
  signInRequest: types.signInRequest,
  signInSuccess: types.signInSuccess,
});
