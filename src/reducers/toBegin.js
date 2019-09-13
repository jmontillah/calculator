import { handleActions } from 'redux-actions';
import { SET_TO_BEGIN } from './../constants';

export const toBegin = handleActions({
    [SET_TO_BEGIN]: (state, action) => state + 1
}, 0);