import styled from 'styled-components'

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    span {
        background: #e2e8f0;
        color: #1f2937;
        font-size: 0.92rem;
        padding: 0.2rem 0.4rem;
        border-radius: 0.2rem;
    }
`

export default function ({ skills }) {
    return (
        <div>
            <h2 style={{ marginTop: '1rem' }}>Skills:</h2>
            <Skills>
                {skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
            </Skills>
        </div>
    )
}
