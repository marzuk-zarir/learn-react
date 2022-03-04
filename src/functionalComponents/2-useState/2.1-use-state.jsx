import { useState } from 'react'

/**
 * ? UseState
 * * useState() is handle state. it returns a array. its 0 index is state's value and 1 index is setter func
 * * this.setState() merged our object type value in state but useState hook completely replace previous value. So, when we use object type value in our state then we must update our state with new object like setUsers((prevState) => {...prevState, 'test'})
 * * When we need previous state we should use callback func in setState()
 *
 */

export default function UseState() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [alert, setAlert] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        const value = e.target.value.includes('.js')
            ? 'Do you know javascript?'
            : ''
        setDescription(e.target.value)
        setAlert(value)
    }

    return (
        <div>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={handleTitleChange}
            />
            <br />
            <br />
            <textarea
                cols="30"
                rows="7"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            ></textarea>
            {title && <p>Title: {title}</p>}
            {description && <p>Description: {description}</p>}
            {alert && <p style={{ color: 'red' }}>{alert}</p>}
        </div>
    )
}
