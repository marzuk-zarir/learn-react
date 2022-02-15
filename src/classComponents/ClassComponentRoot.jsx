import { Component } from 'react'
import Profile from './small-projects/1-ProfileCard/Profile'
import Example from './1-component/1.1-Example'
import Timer from './2-props/2.1-props'
import State from './3-state-and-lifecycleMethods/3.1-state'

export default class ClassComponentRoot extends Component {
    state = {
        locale: 'bn-BD'
    }

    changeLocale() {
        this.state.locale === 'bn-BD'
            ? this.setState({ locale: 'en-US' })
            : this.setState({ locale: 'bn-BD' })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Class Components</h1>

                {/* 1 - Component */}
                <h1>Component:</h1>
                <Example />

                {/* 2 - Props */}
                <h1>Props:</h1>
                <Timer />
                <Timer locale="ar-SA" />

                <h1>Change Props from parent</h1>
                <Timer locale={this.state.locale} />
                <button onClick={() => this.changeLocale()}>
                    Click to change child's prop
                </button>

                {/* Project 1 */}
                <h1>Small Project 1</h1>
                <Profile />

                {/* States and Lifecycle methods */}
                <h1>State</h1>
                <State />
            </div>
        )
    }
}
