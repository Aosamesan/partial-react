import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

export const defineController = (params) => define(defineMergedConfig(params))

export const defineConfig = ({name, param, domSelector}) => {
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
    return config
}

export const defineMergedConfig = (params) => params.map(defineConfig).reduce((prev, current) => ({...prev, ...current}), {})

export const defineParameter = (component, storeFactory) => ({
    component,
    storeFactory
})