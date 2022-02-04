import { Component } from 'react'
import Example from './Example'

export default class ClassComponentRoot extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Class Components</h1>
                <h1>Component:</h1>
                <Example />
                <h1>Component Reuse:</h1>
                <Example />
            </div>
        )
    }
}
