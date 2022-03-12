import { useReducer } from 'react'
import ComponentA from './ComponentA/ComponentA'
import CounterContext from './context/CounterContext'

const reducer = (count, { type, value }) => {
    switch (type) {
        case 'INCREMENT':
            return count + value
        case 'DECREMENT':
            return count - value
        default:
            return count
    }
}

export default function ReducerWithContext() {
    const [count, dispatchCount] = useReducer(reducer, 0)

    return (
        <div style={{ padding: 10, border: '1px solid' }}>
            <p>{count}</p>
            <CounterContext.Provider value={{ dispatchCount }}>
                <ComponentA />
            </CounterContext.Provider>
        </div>
    )
}
