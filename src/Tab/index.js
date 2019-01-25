import React from 'react'
import htmlParser from 'html-react-parser'
import { connect } from 'react-redux'
import { storeFactory } from './redux'
import { defineController, defineParameter } from '../definer';
import { changeTab } from './redux/actionCreators'

class TabComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onTabClick = this.onTabClick.bind(this)
    }

    onTabClick(tabIdx) {
        return (e) => {
            e.preventDefault()
            this.props.changeTab(tabIdx)
        }
    }

    render() {
        const { tabIndex, titles, contents } = this.props
        const selectedContent = contents[tabIndex]

        return (
        <div className="card-body">
            <div id="example-tab" className="card">
                <div className="card-header">
                    <ul className="nav nav-tabs nav-justified card-header-tabs">
                        {
                            titles.map((title, idx) => {
                                let selected = idx === tabIndex

                                return (
                                    <li className="nav-item" key={idx}>
                                        <a href="#" className={"nav-link" + (selected ? " active" : "")} onClick={this.onTabClick(idx)}>{title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="card-body">
                    <div>{htmlParser(selectedContent)}</div>
                </div>
            </div>
        </div>
        )
    }
}

const Tab = props => connect(state => ({
    ...state,
    ...props
}), dispatch => ({
    changeTab: idx => dispatch(changeTab(idx))
}))(TabComponent)

const tabDomSelector = selector => {
    const root = document.querySelector(selector)
    const tabTitles = [...root.querySelector('._tab_menu').querySelectorAll('.nav-item .nav-link')].map(n => n.innerText)
    const tabContents = [...root.querySelector('._tab_wrapper').querySelectorAll('._tab_panel')].map(n => n.innerHTML)
    return {
        titles: tabTitles,
        contents: tabContents
    }
}

export const TabParam = {
    name: 'Tab',
    param: {
        component: Tab,
        storeFactory
    },
    domSelector: tabDomSelector
}