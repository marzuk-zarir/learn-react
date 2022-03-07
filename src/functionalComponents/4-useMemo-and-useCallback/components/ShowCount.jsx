import { memo } from 'react'

function ShowCount({ count, title }) {
    console.log('ShowCount rendering...')
    return (
        <p>
            {title}: {count}
        </p>
    )
}

export default memo(ShowCount)
