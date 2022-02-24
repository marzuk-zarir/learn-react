import { Component } from 'react'

/**
 * ? Conditional rendering
 * * Inside jsx condition should be inlined. In this case we can use ternary operator
 * * For complex condition we can separate condition from inline and store in a variable and use in jsx
 *
 */
export default class extends Component {
    state = { users: null }

    componentDidMount() {
        setTimeout(async () => {
            const users = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            this.setState({ users: await users.json() })
        }, 2000)
    }

    render() {
        return (
            <div>
                <table
                    border="1"
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        borderCollapse: 'collapse'
                    }}
                >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users ? (
                            this.state.users.map(
                                ({ id, username, email, website }) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>{website}</td>
                                    </tr>
                                )
                            )
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ fontWeight: 500 }}>
                                    <p>Loading...</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* If users is truthy value then <p></p> will render */}
                {this.state.users && <p>Users table is fully rendered</p>}
            </div>
        )
    }
}
