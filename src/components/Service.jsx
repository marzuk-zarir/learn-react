import { useParams } from 'react-router-dom'

export default function Service() {
    const params = useParams()

    return <h1>Service {params.name}</h1>
}
