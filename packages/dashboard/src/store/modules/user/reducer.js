import produce from 'immer';

import { types as authTypes } from '../auth/actions';
import { types } from './actions';

const INITIAL_STATE = {
  lastHydration: 0,
  profile: { helpers: {} },
};

export default function userReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.setUser: {
        draft.profile = action.payload.user;
        draft.lastHydration = Date.now();
        break;
      }

      case types.requestFailure: {
        draft.lastHydration = 0;
        draft.profile = { helpers: {} };
        break;
      }

      case authTypes.logOut: {
        draft.lastHydration = 0;
        draft.profile = { helpers: {} };
        break;
      }

      default:
    }
  });
}
