import { Component } from 'react'
import ComponentA from './components/ComponentA'
import ComponentC from './components/ComponentC'
import CounterContext from './contexts/CounterContext'

export default class extends Component {
    state = { count: 0 }
    style = {
        border: 'gray 1px solid',
        padding: 20
    }

    incrementCount = () => {
        this.setState(({ count }) => ({ count: count + 1 }))
    }

    render() {
        return (
            <div style={this.style}>
                {/* Counter context wrapper. It pass states and handler in value prop. when we wrap with this its all children can access its value prop even deeply nested component */}
                <CounterContext.Provider
                    value={{
                        count: this.state.count,
                        incrementCount: this.incrementCount
                    }}
                >
                    <p>This is main parent component</p>
                    <ComponentA />
                    <br />
                    <br />
                    <br />
                    <ComponentC />
                </CounterContext.Provider>
            </div>
        )
    }
}
