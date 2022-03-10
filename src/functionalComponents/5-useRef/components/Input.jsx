import { forwardRef } from 'react'

function Input({ placeholder }, forwardRef) {
    const style = {
        padding: '5px 10px',
        fontSize: 16
    }

    return (
        <div>
            <p>Test</p>
            <input
                type="text"
                ref={forwardRef}
                style={style}
                placeholder={placeholder}
            />
        </div>
    )
}

export default forwardRef(Input)
