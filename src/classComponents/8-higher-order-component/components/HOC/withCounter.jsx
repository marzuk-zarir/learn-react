import { Component } from 'react'

/**
 * ? Higher Order Component
 * * Higher-order component is a function that takes a component and returns a new component for prevent code duplication
 * * In hoc, original component is received from parameter and push default state and handler as props
 * * So, child component can easily access default and handler from props by wrapping hoc func
 *
 */

export default function (OriginalComponent) {
    return class extends Component {
        state = { count: 0 }

        incrementCount = () => {
            this.setState(({ count }) => ({ count: count + 1 }))
        }

        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                />
            )
        }
    }
}
