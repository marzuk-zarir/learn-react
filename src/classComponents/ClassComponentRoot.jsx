import { Component } from 'react'
import Profile from '../small-projects/1-ProfileCard/Profile'
import Example from './1-component/1.1-Example'
import MyContextApi from './10-my-context-api/10.1-my-context-api'
import ContextApi from './11-context-api/11.1-context-api'
import Timer from './2-props/2.1-props'
import State from './3-state-and-lifecycleMethods/3.1-state'
import Lifecycle from './3-state-and-lifecycleMethods/3.2-lifecycle'
import Event from './4-event-handling/4.1-event-handling'
import ControllerReRender from './4-event-handling/4.2-controlled-re-render'
import Loop from './5-looping-and-conditional-rendering/5.1-looping'
import ConditionalRender from './5-looping-and-conditional-rendering/5.2-conditional-rendering'
import FormHandling from './6-form-handling/6.1-form-handling'
import StateLifting from './7-state-lifting/7.1-state-lifting'
import HOC from './8-higher-order-component/8.1-hoc'
import RenderProp from './9-render-prop/9.1-render-prop'

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
                <h1>Lifecycle Methods</h1>
                <Lifecycle />

                {/* Event handling */}
                <h1>Event Handling</h1>
                <Event />
                <h2>- Controlled Re rendering</h2>
                <ControllerReRender />

                {/* Conditional rendering and looping */}
                <h1>Looping</h1>
                <Loop />
                <h1>Conditional Rendering</h1>
                <ConditionalRender />

                {/* Form handling */}
                <h1>Form Handling</h1>
                <FormHandling />

                {/* State lifting */}
                <h1>State Lifting</h1>
                <StateLifting />

                {/* Higher Order Component */}
                <h1>Higher Order Component</h1>
                <HOC />

                {/* Render prop pattern */}
                <h1>Render Prop Pattern</h1>
                <RenderProp />

                {/* My Context Api */}
                <h1>My Context Api</h1>
                <MyContextApi />

                {/* Builtin Context Api */}
                <h1>Builtin Context Api</h1>
                <ContextApi />
            </div>
        )
    }
}
