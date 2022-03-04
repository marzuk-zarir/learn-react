import { useState } from 'react'
import Hooks from './1-hooks/1.1-hooks'
import UseState from './2-useState/2.1-use-state'
import UseEffect from './3-useEffect/3.1-use-effect'

export default function FunctionalComponentRoot() {
    const [show, setShow] = useState(true)

    return (
        <div className="container">
            <h1 className="text-center">Functional Component</h1>
            <h1>Hook</h1>
            <Hooks />
            <h1>Use State</h1>
            <UseState />
            <h1>Use Effect</h1>
            {show && <UseEffect />}
            <button onClick={() => setShow((show) => !show)}>
                {show ? 'Hide' : 'Show'} UseEffect Component
            </button>
        </div>
    )
}
