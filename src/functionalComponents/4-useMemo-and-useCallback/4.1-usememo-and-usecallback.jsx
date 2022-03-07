/**
 * ? useMemo & useCallback
 * * useMemo(cb, [...dependency]) -> it memorize the return value of callback function
 * * useCallback(cb, [...dependency]) -> it memorize the whole callback function
 *
 */

import { useCallback, useMemo, useState } from 'react'
import Button from './components/Button'
import ShowCount from './components/ShowCount'
import Title from './components/Title'

/**
 * ? React memo, useCallback, useMemo
 * * All children auto re-render when parent component re-rendered. it doesn't matter in small components but when large component re-rendered again and again probably our website lagging
 * * So we can solve it by wrap all children with React.memo(). it is not a hook.
 *
 * * Since function is reference value, parent's declared functions on parent re-rendered give a new reference in memory and when we pass those handler in props & use in children, the children will re-render though we use React.memo() on children. To solve this issue, We should wrap those handler with useCallback() hook in parent. It can prevent unnecessary re-render of children
 * ! useCallback(cb, [...dependency]) -> useCallback give a new reference on dependency change. memorize whole callback
 *
 * * useMemo() memorize callback's returned value
 * ! useMemo(cb, [...dependency]) -> useCallback give a new reference on dependency change. memorize only returned value
 *
 */

export default function UseMemoUseCallback() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(1)

    // No dependency. so it never give new reference on this component's re-render after first time
    const handleCount1 = useCallback(() => {
        setCount1((count1) => count1 + 1)
    }, [])

    // count2 dependency. it will give a new reference when count2 is change and those who use it they will render
    const handleCount2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])

    // Without memo count1 affected by large operation though count1 is not use this function
    // When count2 is change this callback will fire otherwise this hook always returned cached value
    const heavyComputation = useMemo(() => {
        let i = 0
        while (i < 1000000000) i++ // lazy operation
        return count2 % 2 === 0
    }, [count2])

    return (
        <div>
            <Title />
            <ShowCount title="Count1 is" count={count1} />
            <Button handleClick={handleCount1}>Increment Count 1</Button>
            <br />
            <ShowCount title="Count2 is" count={count2} />
            <Button handleClick={handleCount2}>Increment Count 2</Button>
            <br />
            <p>{heavyComputation ? 'Even' : 'Odd'}</p>
        </div>
    )
}
