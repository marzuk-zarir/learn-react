import CounterContext from '../contexts/CounterContext'
import ShowCount from './ShowCount'

export default function ComponentB() {
    const style = {
        border: 'gray 1px solid',
        padding: 10
    }

    return (
        <div style={style}>
            <p>This is Component B</p>
            {/* Taken value prop from provider */}
            <CounterContext.Consumer>
                {/* Render props pattern */}
                {({ count }) => <ShowCount count={count} />}
            </CounterContext.Consumer>
        </div>
    )
}
