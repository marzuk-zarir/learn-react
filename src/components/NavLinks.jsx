import { Link } from 'react-router-dom'

export default function NavLinks() {
    return (
        <>
            <ul className="NavLinks">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </>
    )
}
