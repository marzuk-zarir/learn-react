export default function HoverCounter({ count, incrementCount }) {
    return <div onMouseOver={incrementCount}>Hover {count} times</div>
}
