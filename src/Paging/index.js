import React from 'react'
import { connect } from 'react-redux'
import htmlParser from 'html-react-parser'
import { storeFactory } from './redux'
import { defineController, defineParameter } from '../definer';
import { movePage } from './redux/actionCreators';

class PagingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onPrevious = this.onPrevious.bind(this)
        this.onNext = this.onNext.bind(this)
        this.onMovePage = this.onMovePage.bind(this)
    }

    onPrevious() {
        const { currentPage, movePage } = this.props
        return e => {
            if (currentPage > 0) {
                movePage(currentPage - 1)
            }
        }
    }

    onNext() {
        const { currentPage, pageCount, movePage } = this.props
        return e => {
            if (currentPage < pageCount - 1) {
                movePage(currentPage + 1)
            }
        }
    }

    onMovePage(idx) {
        const { pageCount, movePage } = this.props
        return e => {
            if (0 <= idx && idx < pageCount) {
                movePage(idx)
            }
        }
    }

    render() {
        const { currentPage, pages, pageCount } = this.props
        const currentPageContent = pages[currentPage]
        const enablePreviousButton = currentPage > 0
        const enableNextBUtton = currentPage < pageCount - 1

        return (
            <div id="example-paging" className="card text-center">
                <div className="card-body">
                    <div className="card">
                        {htmlParser(currentPageContent)}
                    </div>
                </div>
                <div className="card-body">
                    <div className="btn-group _page_navigation" role="group">
                        <button className={'btn btn-secondary' + (enablePreviousButton ? '' : ' disabled')} onClick={this.onPrevious()} type="button">&lt;</button>
                        {
                            pages.map((p, i) => <button key={i} className={'btn btn-secondary' + (i === currentPage ? ' active' : '')} onClick={this.onMovePage(i)} type='button'>{i + 1}</button>)
                        }
                        <button className={'btn btn-secondary' + (enableNextBUtton ? '' : ' disabled')} type="button" onClick={this.onNext()}>&gt;</button>
                    </div>
                </div>
            </div>
        )
    }
}

const Paging = props => connect(state => ({
    ...props,
    ...state
}), dispatch => ({
    movePage: idx => dispatch(movePage(idx))
}))(PagingComponent)

const pagingDomSelector =  selector => {
    const root = document.querySelector(selector)
    const pages = [...root.querySelectorAll('._page')].map(page => page.innerHTML)
    return {
        pages,
        pageCount: pages.length
    }
}

export const PagingParam = {
    name: 'Paging',
    param: {
        component: Paging,
        storeFactory
    },
    domSelector: pagingDomSelector
}