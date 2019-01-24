import { createStore, combineReducers } from 'redux'
import { count } from './reducers'
import { INITIAL_STATE } from './state';

export const storeFactory = function(state) { return createStore(combineReducers({count}), state ? state : INITIAL_STATE) }