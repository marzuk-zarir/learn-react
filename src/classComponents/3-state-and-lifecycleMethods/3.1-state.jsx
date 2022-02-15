import { Component } from 'react'

/**
 * ? React stateful component
 * * When component's own state or prop change component will re-render on vDom
 * * State is implemented in unidirectional data flow in core. So, parent can't access child's state but child's can easily access parent's state
 *
 */

export default class extends Component {
    /**
     * ? We can declare state in two ways
     * * 1 - In constructor
     * * in this way props should pass to super()
     *
     * * 2 - In class property
     *
     */

    // constructor(props) {
    //     super(props)
    //     this.state = { count: 10, ... }
    // }

    state = { count: 20, names: ['def', 'john doe', 'alice'] }

    // ? create deep copy of muted copy before change a specific element
    addName() {
        // ? Wrong
        // this.state.names[1] = 'test'

        // ? Right
        const names2 = [...this.state.names]
        names2[1] = 'test'
        this.setState({ names: names2 })
    }

    /**
     * * react intelligently batch update of many state at a time for better performance
     * * if we need old state object property inside this.setState() we may not found updated state property which can't provide expected output
     * * So, we can provided a callback function inside this.setState() which receive updated state and props in parameter. it ensure that state property is updated correctly
     *
     */
    increment() {
        // this.setState({ count: this.state.count + 5 })

        this.setState((states, props) => ({
            count: states.count + 5
        }))
    }

    /**
     * * this.setState is a async function. So, sync code run before it and gave previous state property
     * * So, we can pass callback after state update as second argument of this.setState(). it always exec after async task resolve
     *
     */
    decrement() {
        // ? On first load count state is 15 after update
        // this.setState({ count: this.state.count - 5 })
        // ? But will print 20 which is previous state
        // console.log(this.state.count) // => 20

        // ? now it works fine
        this.setState({ count: this.state.count - 5 }, () => {
            console.log(this.state.count) // => 15 on first load
        })
    }

    render() {
        return (
            <div>
                <h3>Names: </h3>
                {this.state.names.map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
                <button onClick={() => this.addName()}>Add Name</button>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.decrement()}>Decrement(-)</button>
                <button onClick={() => this.increment()}>Increment(+)</button>
            </div>
        )
    }
}
