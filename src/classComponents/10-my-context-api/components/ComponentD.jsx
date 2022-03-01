import CounterContext from '../contexts/CounterContext'
import Button from './Button'

export default function ComponentD() {
    const style = {
        border: 'gray 1px solid',
        padding: 10
    }

    return (
        <div style={style}>
            <p>This is Component D</p>
            <CounterContext.Consumer>
                {({ incrementCount }) => (
                    <Button incrementCount={incrementCount} />
                )}
            </CounterContext.Consumer>
        </div>
    )
}
