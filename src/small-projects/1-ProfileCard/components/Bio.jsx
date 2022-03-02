import styled from 'styled-components'

const Bio = styled.div`
    p {
        margin: 0;
        padding: 0;
        color: #64748b;
        font-weight: 500;
    }
`

export default function ({ name, description }) {
    return (
        <Bio>
            <h2>{name}</h2>
            <p>{description}</p>
        </Bio>
    )
}
