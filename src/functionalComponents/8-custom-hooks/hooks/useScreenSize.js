import { useCallback, useEffect, useState } from 'react'

/**
 * * Hook is a special type of function
 * * In this Example, for memorize previous function's reference inside hook we should use useCallback() or declare inner function inside useEffect()'s callback
 *
 */

export default function (screenSize) {
    const [smallScreen, setSmallScreen] = useState(false)

    const setScreen = useCallback(() => {
        setSmallScreen(window.innerWidth < screenSize)
    }, [smallScreen])

    useEffect(() => {
        setScreen()
        window.addEventListener('resize', setScreen)
        return () => window.removeEventListener('resize', setScreen)
    }, [setScreen])

    return smallScreen
}
