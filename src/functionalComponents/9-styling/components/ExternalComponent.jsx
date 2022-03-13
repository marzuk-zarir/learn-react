export default function ExternalComponent({ className, text }) {
    // Pass className from styled component for external component
    return <h1 className={className}>{text}</h1>
}
