import { Component } from 'react'

/**
 * ? Form Handling
 * * There is two way to control the input element in form
 *
 * ! 1 - Controlled Input
 * * Controlled input is handle with react state
 * * Controlled input must have onChange() handler when value="" exist in the element
 * * We can handle input with two way data binding
 * * Two way data binding means when we change state, input el reflect it(value/checked/selected) and when we can change input element, state will equivalent with input el(value/checked/selected))
 *
 * ! 2 - Uncontrolled Input
 * * Uncontrolled input is handle with real dom state
 * * Later in tutorial
 *
 * ? Special Behavior of Jsx El
 * * <template> value control the innerText
 * * <option> selected option will automatically selected
 *
 */
export default class extends Component {
    state = {
        username: '',
        email: '',
        description: '',
        language: '',
        termsAndCondition: true
    }

    // Update state with input value in single func (without checkbox. bcz checkbox's state is store in it's checked property)
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Update checkbox's state
    handleTerms = (e) => {
        this.setState({
            termsAndCondition: e.target.checked
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, email, language, termsAndCondition } = this.state
        console.log({ username, email, language, termsAndCondition })
        // Reset the form
        this.setState({
            username: '',
            email: '',
            description: '',
            language: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Your Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea
                        name="description"
                        cols="30"
                        rows="10"
                        placeholder="Enter Your Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    ></textarea>
                    <br />
                    <br />
                    <select
                        name="language"
                        value={this.state.language}
                        onChange={this.handleChange}
                    >
                        <option value="" disabled hidden>
                            Choose language
                        </option>
                        <option value="javascript">Javascript</option>
                        <option value="rust">Rust</option>
                        <option value="python">Python</option>
                    </select>
                    <br />
                    <br />
                    <input
                        type="checkbox"
                        id="termsAndCondition"
                        checked={this.state.termsAndCondition}
                        onChange={this.handleTerms}
                    />
                    <label htmlFor="termsAndCondition">
                        Agree with terms and conditions
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
