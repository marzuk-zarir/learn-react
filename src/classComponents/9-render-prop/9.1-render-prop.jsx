import ClickCounter from './components/ClickCounter'
import Counter from './components/Counter'
import HoverCounter from './components/HoverCounter'

/**
 * ? Render Prop Pattern
 * * Render prop is a sharing code between component with props
 * * Parent component push default states and handlers in parameter of render() returned func(...state, ...handler)
 * * Then child can easily access states and handlers from callback's args and return another child with those states and handlers
 *
 */

export default function () {
    return (
        <div>
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
            <br />
            <br />
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
        </div>
    )
}
