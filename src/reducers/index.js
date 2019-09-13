import { combineReducers } from 'redux';
import { operation } from './operation';
import { toBegin } from './toBegin';

export default combineReducers({
  operation,
  toBegin
});