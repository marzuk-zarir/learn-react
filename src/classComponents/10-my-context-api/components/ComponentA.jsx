import ComponentB from './ComponentB'

export default function ComponentA() {
    const style = {
        border: 'gray 1px solid',
        padding: 10
    }

    return (
        <div style={style}>
            <p>This is Component A</p>
            <ComponentB />
        </div>
    )
}
