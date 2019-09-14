import { handleActions } from 'redux-actions';
import { SET_HISTORY } from './../constants';

export const history = handleActions({
  [SET_HISTORY]: (state, action) => action.payload
}, '');