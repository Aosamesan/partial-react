import { ACTION_TYPE } from './actions'

export const changeTab = tabIndex => ({
    type: ACTION_TYPE.CHANGE_TAB,
    value: tabIndex
})