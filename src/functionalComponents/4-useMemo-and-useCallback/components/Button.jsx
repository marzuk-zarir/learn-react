import { memo } from 'react'

function Button({ children, handleClick }) {
    console.log('Button rendering...')
    return <button onClick={handleClick}>{children}</button>
}

export default memo(Button)
