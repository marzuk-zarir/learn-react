import { Component } from 'react'

export default class Counter extends Component {
    state = { count: 0 }

    incrementCount = () => {
        this.setState(({ count }) => ({ count: count + 1 }))
    }

    render() {
        return this.props.children(this.state.count, this.incrementCount)
    }
}
