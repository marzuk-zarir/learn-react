import { Component, createRef } from 'react'

/**
 * ? State
 * * When props, state change or forceUpdate() call component will re render in virtual dom and react compare previous snapshot and current snapshot of vDom and only change parts are render on real dom
 * * With lifecycle methods we can do something on specific moment of component
 * Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 *
 */
export default class extends Component {
    state = { time: new Date() }
    paragraphRef = createRef()

    // When component mounted
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000)
    }

    // When component updated
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(snapshot)
        // console.log('component updated')
    }

    // Just before unmount from parent
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    // When mount and update
    static getDerivedStateFromProps(props, state) {
        return null
    }

    // Manually decide is there need to re-render the component
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    // Snapshot before update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.paragraphRef.current.innerHTML
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        ComponentDidMount - Call when component is mount to his
                        parent
                    </li>
                    <li>
                        ComponentDidUpdate - Call when component update. But it
                        is not call when mount
                    </li>
                    <li>
                        ComponentWillUnmount - Call just before unmount from his
                        parent
                    </li>
                    <li>
                        static GetDerivedStateFromProps(props, state) : {'{}'} |
                        null - Call when component mount or update. It's
                        returned object will merged with state. If it return
                        null nothing happen (Rare use case)
                    </li>
                    <li>
                        ShouldComponentUpdate(): Boolean - Manually controlled
                        re-render base on updated props and state. If it return
                        true component will re-render otherwise not (Rare use
                        case)
                    </li>
                </ul>
                <p ref={this.paragraphRef}>
                    {this.state.time.toLocaleTimeString()}
                </p>
            </div>
        )
    }
}
