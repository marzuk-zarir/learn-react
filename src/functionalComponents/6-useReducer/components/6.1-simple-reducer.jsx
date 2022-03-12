import { useReducer } from 'react'

/**
 * ? Reducer
 * * Reducer means reduce anything from another. In react, reducer is a state management mechanism which is used to separate business logic from UI. Usually reducer is used on object type(array, object)
 *
 * * useReducer( reducer(state, action): new_state, initial_state ): [state, dispatch: fn]
 * * dispatch(args) -> dispatch's passed args will received from action of reducer
 *
 */
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return prevState + action.value
        case 'DECREMENT':
            return prevState - action.value
        default:
            return prevState
    }
}

export default function SimpleReducer() {
    const [state, dispatch] = useReducer(reducer, 0)

    const incrementHandler = () => dispatch({ type: 'INCREMENT', value: 5 })
    const decrementHandler = () => dispatch({ type: 'DECREMENT', value: 5 })

    return (
        <div>
            <p>{state}</p>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    )
}
