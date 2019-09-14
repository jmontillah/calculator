import { combineReducers } from 'redux';
import { operation } from './operation';
import { toBegin } from './toBegin';
import { mathOperation } from './mathOperation';
import { history } from './history';

export default combineReducers({
  operation,
  toBegin,
  mathOperation,
  history
});