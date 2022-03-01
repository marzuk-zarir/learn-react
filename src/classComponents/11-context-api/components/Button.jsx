export default function Button({ changeColor }) {
    return (
        <p
            style={{ background: 'lightgray', padding: 10 }}
            onMouseOver={changeColor}
        >
            Hover to Change color
        </p>
    )
}
