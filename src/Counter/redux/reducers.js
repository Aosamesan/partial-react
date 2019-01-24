import { ACTION_TYPE } from './actions'

export const count = (state = 0, action) => {
    switch (action.type) {
        case ACTION_TYPE.INCREASE:
            return state + 1
        case ACTION_TYPE.DECREASE:
            return state - 1
        default:
            return state
    }
}