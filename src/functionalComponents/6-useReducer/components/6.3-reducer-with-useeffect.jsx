import { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: null,
                posts: action.posts
            }
        case 'ERROR':
            return {
                loading: false,
                error: action.error,
                posts: null
            }
        default:
            return state
    }
}

export default function ReducerWithUseEffect() {
    const [state, dispatch] = useReducer(reducer, {
        loading: true,
        error: null,
        posts: null
    })

    useEffect(() => {
        ;(async () => {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/users/1/posts'
                )
                dispatch({
                    type: 'SUCCESS',
                    loading: false,
                    posts: await res.json()
                })
            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    loading: false,
                    error: 'There was an error when fetching posts'
                })
            }
        })()
    }, [])

    return (
        <div>
            <h3>Posts by User 1</h3>
            {state.error && <p>{state.error}</p>}
            {state.loading && <p>Loading...</p>}
            {state.posts &&
                state.posts.map(({ title, body }, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: 10,
                            padding: 10,
                            border: '1px solid lightgray'
                        }}
                    >
                        <h4>{title}</h4>
                        <p>{body}</p>
                    </div>
                ))}
        </div>
    )
}
