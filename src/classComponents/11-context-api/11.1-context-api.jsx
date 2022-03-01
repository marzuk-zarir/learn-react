import { Component } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import HoverContext from './contexts/HoverContext'

/**
 * ? React builtin context api
 * * For context api when provider's value prop change react automatically re-render consumer component in same context. Even when consumer's parent explicitly prevent re render with lifecycle methods or hooks
 *
 * note: For provider's value prop we should pass state's property for prevent useless re render of parent.More: https://reactjs.org/docs/context.html#caveats
 *
 */
export default class ContextApi extends Component {
    state = {
        color: '#6ee7b7',
        changeColor: () => {
            this.setState(({ color }) => ({
                color: color === '#6ee7b7' ? '#fda4af' : '#6ee7b7'
            }))
        }
    }

    render() {
        return (
            <HoverContext.Provider value={this.state}>
                <ComponentA />
                <br />
                <ComponentB />
            </HoverContext.Provider>
        )
    }
}
