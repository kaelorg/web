import produce from 'immer';

import { types as userTypes } from '../user/actions';
import { types } from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  tokenType: '',
};

export default function authReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.signInSuccess: {
        const { token, type } = action.payload;

        draft.signed = true;
        draft.token = token;
        draft.tokenType = type;
        break;
      }

      case types.logOut:
      case types.signFailure:
      case userTypes.requestFailure: {
        draft.token = null;
        draft.signed = false;
        draft.tokenType = '';
        break;
      }

      default:
    }
  });
}
