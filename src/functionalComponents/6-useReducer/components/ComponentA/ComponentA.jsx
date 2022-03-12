import CounterHandler from './CounterHandler'

export default function ComponentA() {
    return (
        <div style={{ padding: 10, border: '1px solid' }}>
            <p>ComponentA</p>
            <CounterHandler />
        </div>
    )
}
