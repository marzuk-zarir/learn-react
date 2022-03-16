import { useLocation, useNavigate, useParams } from 'react-router-dom'

/**
 * ? useNavigate()
 * * navigate(absolute_path) -> redirect to this path
 * * navigate(-n) -> back to n steps
 * * navigate(n) -> forward to n steps
 *
 * ? Optional options: { replace: Boolean, state: any }
 * * Replace will replace the stack item of history
 *
 * ? useLocation()
 * * UseLocation give a object which contains pathname, state, search, hash of current route
 *
 */

export default function SinglePost() {
    const { postId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    function goBack() {
        navigate(-1)
    }

    function goForward() {
        navigate(1)
    }

    console.log(location) // => { pathname: '/posts/3', search: '?name=test', hash: '', state: null, key: 'default' }

    return (
        <div>
            <h1>Single Blog Post {postId}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur at voluptatem atque sit officiis? Fugit sequi maxime
                quis! Nobis nihil iste molestias! Minus iusto commodi dolore et
                provident odit eos.
            </p>
            <button onClick={goBack}>Go Back</button>
            <br />
            <br />
            <button onClick={goForward}>Go Forward</button>
        </div>
    )
}
