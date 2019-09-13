import { handleActions } from 'redux-actions';
import { SET_OPERATION } from './../constants';

export const operation = handleActions({
  [SET_OPERATION]: (state, action) => `${state} ${action.payload}`
}, '');