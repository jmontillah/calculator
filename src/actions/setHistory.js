import { createAction } from 'redux-actions';
import { SET_HISTORY } from './../constants';

export const setHistory = createAction(SET_HISTORY, history => history);