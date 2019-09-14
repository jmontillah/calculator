import { createAction } from 'redux-actions';
import { SET_MATH_OPERATION } from './../constants';

export const setMathOperation = createAction(SET_MATH_OPERATION, mathOperation => mathOperation);