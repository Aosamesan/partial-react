import { createStore, combineReducers } from 'redux'
import { currentPage } from './reducers'
import { INITIAL_STATE } from './state';

export const storeFactory = function(state) { return createStore(combineReducers({currentPage}), state ? state : INITIAL_STATE) }