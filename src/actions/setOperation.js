import { createAction } from 'redux-actions';
import { SET_OPERATION } from './../constants';

export const setOperation = createAction(SET_OPERATION, operation => operation);