import { Component } from 'react'

/**
 * ? Looping
 * * We can use array.map() for render a array of component
 * * Inside loop, parent element's key prop should be unique (array items's index not recommended)
 * note: for loop or array.forEach() not working with jsx
 *
 */
export default class extends Component {
    state = { users: [] }

    componentDidMount() {
        ;(async () => {
            const users = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            this.setState({ users: await users.json() })
        })()
    }

    render() {
        return (
            <ul>
                {this.state.users.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
        )
    }
}
