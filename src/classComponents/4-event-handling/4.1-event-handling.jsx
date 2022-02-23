import { Component } from 'react'

/**
 * ? Event
 * * We can declare event directly in jsx
 * * Event function always receive a event object like as vanilla js
 *
 */
export default class extends Component {
    state = { username: '' }

    handleUsername(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter your name"
                    style={{ fontSize: 16, padding: 8 }}
                    value={this.state.username}
                    // When callback use `this` we should always use arrow function and pass handler inside. Bcz arrow func refer his parent this context
                    onChange={(e) => this.handleUsername(e)}
                />
                {this.state.username ? (
                    <p>Hello {this.state.username}</p>
                ) : (
                    <p>Enter your name</p>
                )}
            </div>
        )
    }
}
