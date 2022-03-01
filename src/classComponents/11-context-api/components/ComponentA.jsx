import { Component } from 'react'
import HoverContext from '../contexts/HoverContext'
import HoverColor from './HoverColor'

export default class ComponentA extends Component {
    render() {
        return (
            <div>
                <p>This is ComponentA</p>
                <HoverContext.Consumer>
                    {/* Render props */}
                    {({ color }) => <HoverColor color={color} />}
                </HoverContext.Consumer>
            </div>
        )
    }
}
