import { createStore, combineReducers } from 'redux'
import { tabIndex } from './reducers'
import { INITIAL_STATE } from './state';

export const storeFactory = state => createStore(combineReducers({tabIndex}), state ? state : INITIAL_STATE)