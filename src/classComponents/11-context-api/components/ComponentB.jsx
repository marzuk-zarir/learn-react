import { Component } from 'react'
import HoverContext from '../contexts/HoverContext'
import Button from './Button'

export default class ComponentB extends Component {
    render() {
        return (
            <div>
                <p>This is component B</p>
                <Button changeColor={this.context.changeColor} />
            </div>
        )
    }
}

/**
 * ? Get context without context.Consumer
 * * with this context is accessible with this.context
 *
 */

ComponentB.contextType = HoverContext
