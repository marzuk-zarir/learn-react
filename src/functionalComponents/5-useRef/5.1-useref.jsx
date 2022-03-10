import { useEffect, useRef, useState } from 'react'
import Input from './components/Input'

/**
 * ? Ref
 * * useRef(default) provide a reference for an element. than we can directly access useRef variable's current property form anywhere in component
 * * When we need to access dom node directly line(clientHeight, offsetX) in react we can use useRef()
 *
 * ? Forward ref
 * * ForwardRef is hoc for receive ref in child component's 2nd parameter
 * * When we need to pass ref from parent to child we should wrap child component with forwardRef. than we can access ref in child's 2nd parameter
 *
 * ? Ref as a storage (trick)
 * * When ref change component does not re render
 * * Ref is set when component mounted then it never reassign when component updated
 * * So we can use ref as a component storage
 *
 * ! note: `ref` is a reserved prop in react
 *
 */

export default function Ref() {
    // Ref
    const inputRef = useRef(null)
    const focusHandler = () => {
        console.log(inputRef)
        inputRef.current.focus()
    }

    // Forward ref
    const forwardRef = useRef(null)

    // Ref as a component storage
    // In this case we persist interval in a ref variable for access anywhere
    const [watch, setWatch] = useState(0)
    let watchInterval = useRef()

    useEffect(() => {
        startWatch()
        return stopWatch
    }, [watch])

    const startWatch = () => {
        watchInterval = setTimeout(() => setWatch((watch) => watch + 1), 1000)
    }

    const stopWatch = () => {
        clearInterval(watchInterval)
    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Enter your text" />
            <br />
            <br />
            <button onClick={focusHandler}>Focus Input</button>
            <br />
            <br />
            <Input ref={forwardRef} placeholder="Forward ref" />
            <br />
            <br />
            <button onClick={() => forwardRef.current.focus()}>
                Focus Forwarded Input
            </button>
            <br />
            <br />
            <p>{watch}</p>
            <button onClick={stopWatch}>Stop Watch</button>
            <button onClick={startWatch}>Start Watch</button>
        </div>
    )
}
