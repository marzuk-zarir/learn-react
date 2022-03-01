export default function Button({ incrementCount }) {
    const style = {
        border: 'gray 1px solid',
        padding: 10
    }

    return (
        <div style={style}>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    )
}
