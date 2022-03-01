export default function HoverColor({ color }) {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        background: color
    }

    return (
        <div style={style}>
            {color === '#6ee7b7' ? (
                <p>Hover color is Green</p>
            ) : (
                <p>Hover color is Red</p>
            )}
        </div>
    )
}
