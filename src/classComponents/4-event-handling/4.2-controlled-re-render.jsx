import { Component } from 'react'
import Button from './components/Button'

export default class extends Component {
    state = { background: 'lightblue' }
    style = {
        width: '200px',
        height: '200px',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    // Refer parent's 'this'
    toggleBg = () => {
        this.state.background === 'lightblue'
            ? this.setState({ background: 'lightgreen' })
            : this.setState({ background: 'lightblue' })
    }

    render() {
        console.log('Parent component rendered')
        return (
            <div>
                <div
                    style={{ ...this.style, background: this.state.background }}
                >
                    {this.state.background.toUpperCase()}
                </div>
                <Button clickChange={this.toggleBg} />
            </div>
        )
    }
}
