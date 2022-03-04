import { useEffect, useState } from 'react'

/**
 * ? UseEffect
 * * When we works with side effect we should use useEffect() in functional component
 * * It is very confusing hook in react. It replaced componentDidMount, componentDidUpdate, componentWillUnmount
 * * We can use multiple useEffect hook in same component
 *
 * * useEffect take callback in first arg
 * * When 2nd arg is empty callback will fire when component mounted or any state changes
 * * When 2nd arg is blank array [] callback will fire when component mounted
 * * When 2nd arg is array [...dependency] callback will fire when mounted and any dependency changes
 * * When this hook return another callback it will fire when component unmounted if 2nd arg is []
 * * When this hook return another callback it will fire when component unmounted or any dependency changes if 2nd arg is [...dependency]
 *
 * ? Simplify:
 * * useEffect( () => console.log("data1 update"), [ data1 ] );
 * * useEffect( () => console.log("any update") );
 * * useEffect( () => () => console.log("data1 update or unmount"), [ data1 ] );
 * * useEffect( () => () => console.log("unmount"), [] );
 *
 */

export default function UseEffect() {
    const [timer, setTimer] = useState(new Date())

    // ! Fire when mounted any component update (componentDidMount, componentDidUpdate combine)
    // useEffect(() => {
    //     console.log('Fire when component mount or any state update')
    // })

    useEffect(() => {
        // ! Fire when mounted
        console.log('Run only when component mounted ')
        // ! Fire when unmounted
        return () => {
            console.log('Fire only when component unmounted')
        }
    }, [])

    // ! Fire when mounted or 'timer' update
    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(new Date())
        }, 1000)

        // ! Fire when 'timer' update or unmounted
        return () => {
            clearInterval(timerInterval)
        }
    }, [timer])

    return (
        <div>
            <p>Timer: {timer.toLocaleTimeString()}</p>
        </div>
    )
}
