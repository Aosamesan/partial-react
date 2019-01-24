import { ACTION_TYPE } from './actions'

export const tabIndex = (state = 0, action) => {
    if (action.type === ACTION_TYPE.CHANGE_TAB && action.value !== state) {
        return action.value
    } else {
        return state
    }
}