import { Link } from 'react-router-dom'

export default function PostsNav() {
    return (
        <ul className="NavLinks">
            <li>
                <Link to="1">Post 1</Link>
            </li>
            <li>
                <Link to="2">Post 2</Link>
            </li>
            <li>
                <Link to="3">Post 3</Link>
            </li>
        </ul>
    )
}
