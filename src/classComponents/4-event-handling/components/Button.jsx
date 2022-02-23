import { Component } from 'react'

/**
 * ? Controlled re render
 * * React by default re render component when props or state change
 * * In this case this component call the handler from props but when parent re rendered it will re render
 * * But it's rerender is not necessary so we can use shouldComponentUpdate() lifecycle method
 * note: Small component doesn't need optimization like this component. But larger component should be optimize
 */
export default class extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.clickChange === nextProps.clickChange ? false : true
    }

    render() {
        console.log('Child component rendered')
        return (
            <button style={{ marginTop: 20 }} onClick={this.props.clickChange}>
                Toggle Background
            </button>
        )
    }
}
