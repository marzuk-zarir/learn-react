export default function ShowCount({ count }) {
    const style = {
        border: 'gray 1px solid',
        padding: 10
    }

    return (
        <div style={style}>
            <h4>Count is now: {count}</h4>
        </div>
    )
}
