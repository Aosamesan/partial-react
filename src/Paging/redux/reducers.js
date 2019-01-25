import { ACTION_TYPE } from './actions'

export const currentPage = (state = 0, action) => {
    switch (action.type) {
        case ACTION_TYPE.MOVE_PAGE:
            return action.value
        default:
            return state
    }
}