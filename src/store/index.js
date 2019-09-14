import { createStore, compose } from 'redux';
import reducers from './../reducers';

const initialState = {
  operation: '0',
  toBegin: 0,
  mathOperation: '0',
  history: '',
}

// To see state and redux in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducers, initialState, composeEnhancers);