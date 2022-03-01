class Context {
    constructor(value) {
        this.value = value
    }

    // Provider component
    // Take props.value from parameter and set in class property and return props.children
    Provider = ({ children, value }) => {
        this.value = value
        return children
    }

    // Consumer component
    // Take props.children and call it with existing property and return
    Consumer = ({ children }) => children(this.value)
}

export default function createContext(value = null) {
    const context = new Context(value)
    return { Provider: context.Provider, Consumer: context.Consumer }
}
