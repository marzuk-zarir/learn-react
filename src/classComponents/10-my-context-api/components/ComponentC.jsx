import ComponentD from './ComponentD'

export default function ComponentC() {
    const style = {
        border: 'gray 1px solid',
        padding: 10
    }

    return (
        <div style={style}>
            <p>This is Component C</p>
            <ComponentD />
        </div>
    )
}
