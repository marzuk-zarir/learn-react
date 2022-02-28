import withCounter from './HOC/withCounter'

function ClickCounter({ count, incrementCount }) {
    return <button onClick={incrementCount}>Clicked {count} times</button>
}

export default withCounter(ClickCounter)
