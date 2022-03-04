import { nanoid } from 'nanoid'
import { useState } from 'react'

/**
 * ? React Hooks
 * * Hooks are function. It simplify the react
 * * Functional components are stateless in old school react. With hooks we can create stateful functional components
 * * When we re use state and lifecycle in different components we can use custom hook. Which is replace Higher Order Component(HOC) and Render props pattern
 * * All hooks always start with 'use' keyword
 *
 * ? Common hooks in react:
 * * 1. useState(default_value): [any, func] -> for state management. Replacement of state = {} and this.setState()
 * * 2. useEffect(callback: function | void, [state]): void -> for handle lifecycle event. Replacement of componentDidMount, componentDidUpdate, componentWillUnmount
 * * 3. useContext(context): any -> for handle context consumer. Replacement of <context.consumer>{(value) => ()}</context.consumer>
 * * 4. useRef(default_value): default | HTMLElement -> for handle dom reference. Replacement of react.createRef()
 *
 * ? Other hooks:
 * * 1. useReducer()
 * * 2. useCallback()
 * * 3. useMemo()
 * * 4. useLayoutEffect()
 *
 */

export default function Hooks() {
    // Define state
    const [fruits] = useState([
        'mango',
        'apple',
        'banana',
        'orange',
        'watermelon'
    ])

    return (
        <ul>
            {fruits.map((fruit) => (
                <li key={nanoid()}>{fruit}</li>
            ))}
        </ul>
    )
}
