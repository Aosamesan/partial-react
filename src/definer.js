import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

export const defineController = (name, param, domSelector) => {
    const { component, storeFactory } = param
    let config = {}
    config[`${name}Controller`] = (selector, params) => {
        const { state, props } = params || {}
        const store = storeFactory({...state})
        const Component = component({
            __selector:selector,
            ...props,
            ...(domSelector ? domSelector(selector) : {})
        })
        ReactDOM.render(
            <Provider store={store}><Component /></Provider>,
            document.querySelector(selector)
            )
    }
    define(config)
}

export const defineParameter = (component, storeFactory) => ({
    component,
    storeFactory
})