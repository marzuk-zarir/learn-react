import useScreenSize from './hooks/useScreenSize'

/**
 * ? Custom hook
 * * For reuse state and side effect in different components we can use custom hook
 * * Custom hook replace HOC and render prop pattern
 * * With custom hook we can also pass argument and conditionally do something
 *
 */

export default function CustomHook() {
    const isSmallScreen = useScreenSize(992)
    const isSmallScreen2 = useScreenSize(1200)

    return (
        <div>
            <p>
                Screen size is <b>{isSmallScreen ? 'Small' : 'Large'}</b> for
                992px
            </p>
            <p>
                Screen size is <b>{isSmallScreen2 ? 'Small' : 'Large'}</b> for
                1200px
            </p>
        </div>
    )
}
