import styled from 'styled-components'
import Card from './components/Card'

const Profiles = [
    {
        name: 'John Doe',
        description: 'Self Learned Frontend Developer, Student',
        background: '#fffbeb',
        skills: ['JavaScript', 'React', 'Alpinejs', 'Next.js', 'Firebase']
    },
    {
        name: 'Lethal Smith',
        description: 'Fullstack Developer, Entrepreneur and Trainer',
        background: '#eef2ff',
        skills: ['NodeJs', 'Django', 'React', 'Docker']
    },
    {
        name: 'Mason ley',
        description: 'Senior DevOps Engineer and Trainer',
        background: '#fff1f2',
        skills: ['Kubernetes', 'Terraform', 'Python', 'AWS', 'Nginx', 'Linux']
    }
]

const CardWrapper = styled.div`
    display: flex;
    column-gap: 1.5rem;
    margin: 0 auto;
    max-width: 1000px;
`

export default function () {
    return (
        <CardWrapper>
            {Profiles.map(
                ({ name, description, background, skills }, index) => (
                    <Card
                        name={name}
                        description={description}
                        background={background}
                        skills={skills}
                        key={index}
                    />
                )
            )}
        </CardWrapper>
    )
}
