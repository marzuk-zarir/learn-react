import styled from 'styled-components'

const LinksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    a {
        color: #1d4ed8;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

export default function () {
    return (
        <div>
            <h2 style={{ marginTop: '1rem' }}>Social Links:</h2>
            <LinksWrapper>
                <a href="#facebook">Facebook</a>
                <a href="#twitter">Twitter</a>
                <a href="#github">Github</a>
                <a href="#reddit">Reddit</a>
            </LinksWrapper>
        </div>
    )
}
