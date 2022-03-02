import styled from 'styled-components'
import Bio from './Bio'
import Skills from './Skills'
import SocialLinks from './SocialLinks'

const Card = styled.div`
    width: 24.99%;
    padding: 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 0.8rem;
    background: ${(props) => props.background};
    h2 {
        color: #0f172a;
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0;
        padding: 0;
        margin-bottom: 0.5rem;
    }
`

export default function ({ name, description, background, skills }) {
    return (
        <Card background={background}>
            <Bio name={name} description={description} />
            <Skills skills={skills} />
            <SocialLinks />
        </Card>
    )
}
