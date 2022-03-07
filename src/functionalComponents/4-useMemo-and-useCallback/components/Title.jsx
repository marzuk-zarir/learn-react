import { memo } from 'react'

function Title() {
    console.log('Title rendering...')
    return <h3>Hello world</h3>
}

export default memo(Title)
