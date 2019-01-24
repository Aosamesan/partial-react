import { ACTION_TYPE } from './actions'

export const increaseCount = () => ({
    type: ACTION_TYPE.INCREASE
})

export const decreaseCount = () => ({
    type: ACTION_TYPE.DECREASE
})