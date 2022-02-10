import { Component } from 'react'

/**
 * ? Component is a small piece of code which is dynamic and reusable
 * * When component is mounted with his parent component, data layer will create newly
 * * Component must have render() method
 *
 */

export default class Example extends Component {
    /**
     * ? 1 - Data layer of a component
     * * Here we declare local variable(state) for our component
     * * This layer is encapsulated from his own parent & other components
     *
     */

    state = { greet: 'Hello react', count: 0 }

    /**
     * ? 1.1 - Lifecycle Methods
     * - constructor()
     * - componentDidMount()
     * - componentDidUpdate()
     * - componentWillUnmount()
     *
     */

    /**
     * ? 1.2 User defined methods
     * All necessary methods for handling event or local state
     *
     */

    increaseCount() {
        this.setState({ count: this.state.count + 1 })
    }

    decreaseCount() {
        this.setState({ count: this.state.count - 1 })
    }

    /**
     * ? 2 - Visual layer of a component
     * * All Jsx code is transpile into plain js with babel
     *
     * * Jsx code:
     * <div className="container">
     *     <h1>lorem heading</h1>
     *     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo</p>
     * </div>
     *
     * * Transpile to:
     * React.createElement('div',
     *  { className="container" },[
     *  React.createElement('h1', null, 'lorem heading'),
     *  React.createElement('p', null, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quidem')
     * ])
     *
     * * Jsx syntax
     * All attribute is camelCase and this is called property (prop[s])
     * Inside {} brace all codes are js expression
     * Example() === <Example></Example> === <Example />
     *
     */

    render() {
        return (
            <div>
                <h4>{this.state.greet}</h4>
                <h4>Count is {this.state.count}</h4>
                <button onClick={() => this.decreaseCount()}>
                    Decrease(-)
                </button>
                <button onClick={() => this.increaseCount()}>
                    Increase(+)
                </button>
            </div>
        )
    }
}
