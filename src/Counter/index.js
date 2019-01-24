import React from 'react'
import { connect } from 'react-redux'
import { storeFactory } from './redux'
import { defineController, defineParameter } from '../definer';
import { increaseCount, decreaseCount } from './redux/actionCreators';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onIncrease = this.onIncrease.bind(this)
        this.onDecrease = this.onDecrease.bind(this)
    }

    onIncrease(e) {
        this.props.increase()
    }

    onDecrease(e) {
        this.props.decrease()
    }

    render() {
        const { count } = this.props

        return (
            <React.Fragment>
                <h2 className="card-title">Count : {count}</h2>
                <div className="btn-group btn-group-lg" role="group">
                    <button className="btn btn-success"type="button" onClick={this.onIncrease}>Increase</button>
                    <button className="btn btn-danger" type="button" onClick={this.onDecrease}>Decrease</button>
                </div>
            </React.Fragment>
        )
    }
}

const Counter = props => connect(state => ({
    ...props,
    ...state
}), dispatch => ({
    increase: () => dispatch(increaseCount()),
    decrease: () => dispatch(decreaseCount())
}))(CounterComponent)

defineController('Counter', defineParameter(Counter, storeFactory))