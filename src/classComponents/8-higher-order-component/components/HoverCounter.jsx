import withCounter from './HOC/withCounter'

function HoverCounter({ count, incrementCount }) {
    return (
        <div
            style={{
                background: 'limegreen',
                padding: '1rem',
                marginTop: '1rem'
            }}
            onMouseOver={incrementCount}
        >
            Hover {count} times
        </div>
    )
}

export default withCounter(HoverCounter)
