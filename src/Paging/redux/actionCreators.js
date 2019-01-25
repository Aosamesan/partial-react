import { ACTION_TYPE } from './actions'

export const movePage = idx => ({
    type: ACTION_TYPE.MOVE_PAGE,
    value: idx
})