import { handleActions } from 'redux-actions';
import { SET_MATH_OPERATION } from './../constants';

export const mathOperation = handleActions({
  [SET_MATH_OPERATION]: (state, action) => action.payload
}, '0')