import { createAction } from 'redux-actions';
import { SET_TO_BEGIN } from './../constants';

export const setToBegin = createAction(SET_TO_BEGIN, toBegin => toBegin);