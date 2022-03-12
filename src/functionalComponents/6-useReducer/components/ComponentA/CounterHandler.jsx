import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

export default function CounterHandler() {
    const counterContext = useContext(CounterContext)

    const incrementCount = () =>
        counterContext.dispatchCount({ type: 'INCREMENT', value: 2 })
    const decrementCount = () =>
        counterContext.dispatchCount({ type: 'DECREMENT', value: 2 })

    return (
        <div style={{ padding: 10, border: '1px solid' }}>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
}
