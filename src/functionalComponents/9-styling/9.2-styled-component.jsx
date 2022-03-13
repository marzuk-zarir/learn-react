/**
 * ? Styled Component (3rd party)
 * * Styled component provide us sass like nesting, auto vendor prefixes, no class name collusion
 * * Style component use tagged template literal for styling. all css property name is default (no camelCase). It returns a component which contains those styles
 * * styled.tag`css` for built in tag and for custom component we can use styled(custom_component)`css` [must pass className prop to child which want to style]
 * * In production build it can not parse into raw css file like css module
 * * It also supports injecting global style, animation, ssr stylesheet injecting etc
 *
 * ! Note: React component should return one element. Sometimes it breaks our styles. For prevent this we can use <React.Fragment></React.Fragment> or shorthand <></>
 */

import { useState } from 'react'
import {
    Button,
    ButtonWrapper,
    Card,
    CounterCount,
    External,
    GlobalStyles,
    Heading,
    Wrapper
} from './styles/Counter.styles'

export default function StyledComponent() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((count) => count + 1)
    }

    const decrementCount = () => {
        setCount((count) => count - 1)
    }

    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Card>
                    <Heading>My Counter</Heading>
                    <CounterCount>{count}</CounterCount>
                    <ButtonWrapper>
                        <Button
                            background="#ef4444"
                            color="#fff"
                            onClick={decrementCount}
                            draggable
                        >
                            Decrement Count
                        </Button>
                        <Button
                            background="#10b981"
                            color="#fff"
                            onClick={incrementCount}
                        >
                            Increment Count
                        </Button>
                    </ButtonWrapper>
                </Card>
            </Wrapper>
            <External
                fontSize="1.8"
                text="WLorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cum!"
            />
            <kbd>Ctrl + C</kbd>
        </>
    )
}
