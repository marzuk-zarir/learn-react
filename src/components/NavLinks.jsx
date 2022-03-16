import { Link, NavLink } from 'react-router-dom'
import styles from '../assets/css/Navlinks.module.css'

const setActiveClass = ({ isActive }) =>
    isActive ? styles['active-nav-item'] : ''

export default function NavLinks() {
    return (
        <>
            <ul className="NavLinks">
                <li>
                    <Link to="/">Root</Link>
                </li>
                <li>
                    <NavLink to="home" className={setActiveClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" className={setActiveClass}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="service/abc" className={setActiveClass}>
                        Service abc
                    </NavLink>
                </li>
                <li>
                    <NavLink to="service/def" className={setActiveClass}>
                        Service def
                    </NavLink>
                </li>
                <li>
                    <NavLink to="service/abc/hsds" className={setActiveClass}>
                        Service Anything
                    </NavLink>
                </li>
                <li>
                    <NavLink to="posts" className={setActiveClass}>
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="dashboard" className={setActiveClass}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="admin" className={setActiveClass}>
                        Admin
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
