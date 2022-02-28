import { Component } from 'react'
import Boiling from './components/Boiling'
import Input from './components/Input'

/**
 * ? State Lifting
 * * React state works in unidirectional data-flow. Child can access parent's state but parent cannot access child's state
 * * State lifting means when same level component or parent want to access the child's state, state should be define in parent
 * * For state change or access parent's state from child component parent must pass the state and handler inside child's props
 *
 */
export default class extends Component {
    state = { scale: 'celsius', temperature: '' }

    handleTemperatureChange = (scale, temperature) => {
        this.setState({ scale, temperature })
    }

    render() {
        const celsius =
            this.state.scale === 'fahrenheit'
                ? parseFloat(
                      (((this.state.temperature - 32) * 5) / 9).toFixed(2)
                  )
                : this.state.temperature

        const fahrenheit =
            this.state.scale === 'celsius'
                ? parseFloat(((this.state.temperature * 9) / 5 + 32).toFixed(2))
                : this.state.temperature

        return (
            <div>
                <Input
                    scale="celsius"
                    temperature={celsius}
                    setTemperature={this.handleTemperatureChange}
                />
                <br />
                <Input
                    scale="fahrenheit"
                    temperature={fahrenheit}
                    setTemperature={this.handleTemperatureChange}
                />
                <br />
                {this.state.temperature && (
                    <Boiling
                        scale={this.state.scale}
                        temperature={this.state.temperature}
                    />
                )}
            </div>
        )
    }
}
