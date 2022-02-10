import { Component } from 'react'

export default class Timer extends Component {
    /**
     * ? Props
     * * Props is a dynamic value of a component which is passed from parent component as attribute
     * * When parent component change props object, child component will automatically re-render
     * * Class component --> this.props property
     * * Functional component --> A(props) {}
     */
    render() {
        return (
            <div>
                <p>{new Date().toLocaleString(this.props.locale || 'en-us')}</p>
            </div>
        )
    }
}
